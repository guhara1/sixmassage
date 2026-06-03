import { areaGroups, areaPages, magazinePosts, servicePages } from "@/lib/site-data";

export const coreInternalLinks = [
  {
    href: "/areas",
    label: "운영지역을 권역별로 확인하기",
    description: "수원권, 동탄·오산권, 용인권, 분당권의 실제 안내 지역을 먼저 확인할 수 있습니다."
  },
  {
    href: "/service/before-reservation",
    label: "예약 전 확인사항 먼저 보기",
    description: "지역, 시간, 공간, 출입 방식처럼 전화 문의 전에 정리할 내용을 안내합니다."
  },
  {
    href: "/magazine",
    label: "생활상황별 매거진 글 보기",
    description: "직장인 피로, 가족 공간 준비, 지역별 웰니스 같은 정보성 글을 모았습니다."
  },
  {
    href: "/faq",
    label: "예약 전 자주 묻는 질문 확인하기",
    description: "가능지역, 당일 문의, 요금 확인, 방문 전 준비에 대한 질문을 정리했습니다."
  }
];

const magazineByArea: Record<string, string[]> = {
  suwon: ["suwon-commuter-fatigue-routine", "yeongtong-after-work-neck-shoulder-care"],
  yeongtong: ["yeongtong-after-work-neck-shoulder-care", "suwon-commuter-fatigue-routine"],
  "suwon-station": ["suwon-commuter-fatigue-routine", "reservation-phone-checklist"],
  "ingye-dong": ["suwon-commuter-fatigue-routine", "safe-visit-service-checkpoints"],
  "guun-dong": ["suwon-commuter-fatigue-routine", "yongin-suji-weekend-homecare"],
  dongtan: ["dongtan-family-weekend-wellness", "reservation-phone-checklist"],
  osan: ["osan-worker-evening-routine", "reservation-phone-checklist"],
  "gwol-dong": ["osan-worker-evening-routine", "safe-visit-service-checkpoints"],
  yongin: ["yongin-suji-weekend-homecare", "safe-visit-service-checkpoints"],
  "cheoin-gu": ["yongin-suji-weekend-homecare", "reservation-phone-checklist"],
  suji: ["yongin-suji-weekend-homecare", "safe-visit-service-checkpoints"],
  pogok: ["yongin-suji-weekend-homecare", "reservation-phone-checklist"],
  singal: ["yongin-suji-weekend-homecare", "osan-worker-evening-routine"],
  giheung: ["yongin-suji-weekend-homecare", "yeongtong-after-work-neck-shoulder-care"],
  dongbaek: ["yongin-suji-weekend-homecare", "dongtan-family-weekend-wellness"],
  bundang: ["bundang-jeongja-after-work-recovery", "safe-visit-service-checkpoints"],
  "migeum-station": ["bundang-jeongja-after-work-recovery", "reservation-phone-checklist"],
  "sunae-station": ["bundang-jeongja-after-work-recovery", "yeongtong-after-work-neck-shoulder-care"],
  "jeongja-station": ["bundang-jeongja-after-work-recovery", "safe-visit-service-checkpoints"],
  "seohyeon-station": ["bundang-jeongja-after-work-recovery", "osan-worker-evening-routine"]
};

export function getAreaInternalLinks(slug: string) {
  const area = areaPages.find((item) => item.slug === slug);
  const siblingGroup = areaGroups.find((group) => group.name === area?.group);
  const siblingLinks = siblingGroup?.areas
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => ({
      href: `/areas/${item.slug}`,
      label: `${item.name} 생활권 예약 전 확인사항`,
      description: `${siblingGroup.name} 안에서 ${item.name} 세부 위치와 방문 가능 여부를 확인합니다.`
    })) ?? [];

  const magazineLinks = (magazineByArea[slug] ?? [])
    .map((postSlug) => magazinePosts.find((post) => post.slug === postSlug))
    .filter(Boolean)
    .map((post) => ({
      href: `/magazine/${post!.slug}`,
      label: post!.title,
      description: post!.excerpt
    }));

  return [
    ...siblingLinks,
    ...magazineLinks,
    {
      href: "/service/before-reservation",
      label: "전화예약 전 지역·시간·공간 체크하기",
      description: "문의 전에 정리하면 좋은 세부 위치, 시간대, 출입 정보를 한 번에 확인합니다."
    }
  ];
}

export function getMagazineInternalLinks(slug: string) {
  const post = magazinePosts.find((item) => item.slug === slug);
  const sameCategory = magazinePosts
    .filter((item) => item.slug !== slug && item.category === post?.category)
    .slice(0, 2)
    .map((item) => ({
      href: `/magazine/${item.slug}`,
      label: item.title,
      description: item.excerpt
    }));

  const areaLink = inferAreaLink(slug);
  return [
    ...sameCategory,
    areaLink,
    {
      href: "/areas",
      label: "내 생활권이 실제 운영지역인지 확인하기",
      description: "운영하지 않는 지역 유입을 만들지 않기 위해 권역별 가능지역을 분리해 안내합니다."
    }
  ].filter(Boolean);
}

export function getServiceInternalLinks(slug: string) {
  const siblingLinks = servicePages
    .filter((page) => page.slug !== slug)
    .map((page) => ({
      href: `/service/${page.slug}`,
      label: page.title,
      description: "방문 전 절차와 기준을 이어서 확인할 수 있는 서비스 안내 페이지입니다."
    }));

  return [
    ...siblingLinks,
    {
      href: "/areas",
      label: "운영지역을 먼저 확인한 뒤 문의하기",
      description: "수원권, 동탄·오산권, 용인권, 분당권 안의 세부 지역을 확인합니다."
    },
    {
      href: "/magazine/reservation-phone-checklist",
      label: "전화예약 전에 확인하면 좋은 지역·시간·준비사항",
      description: "상담이 빨라지도록 문의 전 정리할 항목을 생활상황 중심으로 안내합니다."
    }
  ];
}

function inferAreaLink(slug: string) {
  if (slug.includes("suwon")) {
    return { href: "/areas/suwon", label: "수원권 예약 가능지역 확인", description: "수원, 영통, 수원역, 인계동, 구운동 안내를 확인합니다." };
  }
  if (slug.includes("yeongtong")) {
    return { href: "/areas/yeongtong", label: "영통 거주 직장인을 위한 지역 안내", description: "영통 세부 위치와 인근 수원권 상담 기준을 확인합니다." };
  }
  if (slug.includes("dongtan")) {
    return { href: "/areas/dongtan", label: "동탄 신도시 방문 전 지역 안내", description: "동탄과 오산권 운영지역을 함께 확인합니다." };
  }
  if (slug.includes("osan")) {
    return { href: "/areas/osan", label: "오산 직장인을 위한 가능지역 안내", description: "오산과 궐동 인근 상담 가능 여부를 확인합니다." };
  }
  if (slug.includes("yongin") || slug.includes("suji")) {
    return { href: "/areas/suji", label: "용인 수지 주말 홈케어 지역 안내", description: "수지와 용인권 인근 지역의 방문 전 확인사항을 봅니다." };
  }
  if (slug.includes("bundang") || slug.includes("jeongja")) {
    return { href: "/areas/jeongja-station", label: "분당 정자역 직장인을 위한 지역 안내", description: "정자역과 분당권 인근 운영지역을 확인합니다." };
  }
  return { href: "/service/before-reservation", label: "예약 전 확인사항", description: "지역과 시간, 공간 준비 기준을 먼저 확인합니다." };
}
