export const site = {
  name: "식스 마사지",
  company: "YH LAB",
  owner: "김유환",
  registration: "815-26-00585",
  address: "경기도 파주시 청석로 268",
  phone: "0508-202-4717",
  tel: "05082024717",
  url: "https://sixmassage.com"
};

export const areaGroups = [
  {
    name: "수원권",
    href: "/areas/suwon",
    areas: [
      { name: "수원", slug: "suwon" },
      { name: "영통", slug: "yeongtong" },
      { name: "수원역", slug: "suwon-station" },
      { name: "인계동", slug: "ingye-dong" },
      { name: "구운동", slug: "guun-dong" }
    ]
  },
  {
    name: "동탄·오산권",
    href: "/areas/dongtan",
    areas: [
      { name: "동탄", slug: "dongtan" },
      { name: "오산", slug: "osan" },
      { name: "궐동", slug: "gwol-dong" }
    ]
  },
  {
    name: "용인권",
    href: "/areas/yongin",
    areas: [
      { name: "용인", slug: "yongin" },
      { name: "처인구", slug: "cheoin-gu" },
      { name: "수지", slug: "suji" },
      { name: "포곡", slug: "pogok" },
      { name: "신갈", slug: "singal" },
      { name: "기흥", slug: "giheung" },
      { name: "동백", slug: "dongbaek" }
    ]
  },
  {
    name: "분당권",
    href: "/areas/bundang",
    areas: [
      { name: "분당", slug: "bundang" },
      { name: "미금역", slug: "migeum-station" },
      { name: "수내역", slug: "sunae-station" },
      { name: "정자역", slug: "jeongja-station" },
      { name: "서현역", slug: "seohyeon-station" }
    ]
  }
];

export const areaPages = [
  { slug: "suwon", name: "수원", group: "수원권", nearby: ["영통", "수원역", "인계동", "구운동"] },
  { slug: "yeongtong", name: "영통", group: "수원권", nearby: ["수원", "수원역", "인계동"] },
  { slug: "suwon-station", name: "수원역", group: "수원권", nearby: ["수원", "인계동", "구운동"] },
  { slug: "ingye-dong", name: "인계동", group: "수원권", nearby: ["수원", "수원역", "영통"] },
  { slug: "guun-dong", name: "구운동", group: "수원권", nearby: ["수원", "수원역", "영통"] },
  { slug: "dongtan", name: "동탄", group: "동탄·오산권", nearby: ["오산", "궐동"] },
  { slug: "osan", name: "오산", group: "동탄·오산권", nearby: ["동탄", "궐동"] },
  { slug: "gwol-dong", name: "궐동", group: "동탄·오산권", nearby: ["오산", "동탄"] },
  { slug: "yongin", name: "용인", group: "용인권", nearby: ["처인구", "수지", "포곡", "신갈", "기흥", "동백"] },
  { slug: "cheoin-gu", name: "처인구", group: "용인권", nearby: ["용인", "포곡", "기흥"] },
  { slug: "suji", name: "수지", group: "용인권", nearby: ["용인", "신갈", "기흥"] },
  { slug: "pogok", name: "포곡", group: "용인권", nearby: ["처인구", "용인"] },
  { slug: "singal", name: "신갈", group: "용인권", nearby: ["기흥", "수지", "동백"] },
  { slug: "giheung", name: "기흥", group: "용인권", nearby: ["신갈", "동백", "수지"] },
  { slug: "dongbaek", name: "동백", group: "용인권", nearby: ["기흥", "신갈", "용인"] },
  { slug: "bundang", name: "분당", group: "분당권", nearby: ["미금역", "수내역", "정자역", "서현역"] },
  { slug: "migeum-station", name: "미금역", group: "분당권", nearby: ["분당", "정자역", "수내역"] },
  { slug: "sunae-station", name: "수내역", group: "분당권", nearby: ["분당", "정자역", "서현역"] },
  { slug: "jeongja-station", name: "정자역", group: "분당권", nearby: ["분당", "미금역", "수내역"] },
  { slug: "seohyeon-station", name: "서현역", group: "분당권", nearby: ["분당", "수내역", "정자역"] }
];

export const servicePages = [
  { slug: "visit-massage", title: "출장마사지 안내" },
  { slug: "process", title: "이용절차" },
  { slug: "price", title: "요금 안내" },
  { slug: "before-reservation", title: "예약 전 확인사항" }
];

export const magazineCategories = [
  "전체",
  "직장인 피로 관리",
  "가족·주거공간 케어",
  "지역별 웰니스 가이드",
  "출장마사지 이용 가이드",
  "서비스 안전 가이드",
  "FAQ 모음"
];

export const magazineCategoryDetails = [
  {
    name: "직장인 피로 관리",
    description: "출퇴근, 야근, 장시간 앉은 자세처럼 반복되는 업무 루틴에서 컨디션을 점검하는 글입니다."
  },
  {
    name: "가족·주거공간 케어",
    description: "아파트, 신도시, 주말 가족 일정처럼 집에서 방문 서비스를 준비할 때 필요한 기준을 다룹니다."
  },
  {
    name: "지역별 웰니스 가이드",
    description: "수원·동탄·오산·용인·분당 생활권별로 휴식 루틴과 예약 전 확인 포인트를 정리합니다."
  },
  {
    name: "출장마사지 이용 가이드",
    description: "전화예약, 당일 문의, 준비물, 시간 확인 등 실제 이용 전 필요한 절차 중심 안내입니다."
  },
  {
    name: "서비스 안전 가이드",
    description: "건전한 이용 기준, 개인정보 보호, 과장 표현 구분법을 확인하는 안전 중심 콘텐츠입니다."
  },
  {
    name: "FAQ 모음",
    description: "예약 전 자주 묻는 질문을 한 번에 훑어볼 수 있도록 정리한 문답형 글입니다."
  }
];

export const magazinePosts = [
  {
    slug: "suwon-commuter-fatigue-routine",
    title: "수원에서 서울로 출퇴근하는 직장인의 피로 관리 방법",
    category: "직장인 피로 관리",
    excerpt: "긴 출퇴근과 저녁 일정이 겹치는 수원 직장인을 위해 하루 피로를 정리하는 현실적인 기준을 안내합니다.",
    audience: "장거리 출퇴근 직장인",
    readTime: "7분"
  },
  {
    slug: "yeongtong-after-work-neck-shoulder-care",
    title: "영통 거주 직장인을 위한 퇴근 후 어깨·목 피로 관리",
    category: "직장인 피로 관리",
    excerpt: "컴퓨터 업무와 재택근무가 많은 영통 생활권에서 목·어깨 긴장을 줄이는 저녁 루틴을 정리했습니다.",
    audience: "영통 거주 직장인",
    readTime: "6분"
  },
  {
    slug: "dongtan-family-weekend-wellness",
    title: "동탄 신도시 가족을 위한 주말 방문 웰니스 안내",
    category: "가족·주거공간 케어",
    excerpt: "동탄 신도시 아파트 생활권에서 가족 일정과 방문 전 공간 준비를 함께 고려하는 방법을 소개합니다.",
    audience: "동탄 가족 거주자",
    readTime: "7분"
  },
  {
    slug: "yongin-suji-weekend-homecare",
    title: "용인 수지 거주자를 위한 주말 홈케어 준비법",
    category: "가족·주거공간 케어",
    excerpt: "수지 생활권에서 주말 휴식을 계획할 때 가족 동선, 실내 환경, 예약 시간을 정리하는 글입니다.",
    audience: "수지·용인 가족",
    readTime: "6분"
  },
  {
    slug: "bundang-jeongja-after-work-recovery",
    title: "분당 정자역 직장인을 위한 퇴근 후 컨디션 관리 가이드",
    category: "지역별 웰니스 가이드",
    excerpt: "정자역 주변 업무 루틴과 역세권 생활 패턴을 바탕으로 퇴근 후 회복 시간을 설계하는 방법입니다.",
    audience: "분당 정자역 직장인",
    readTime: "7분"
  },
  {
    slug: "osan-worker-evening-routine",
    title: "오산 직장인을 위한 퇴근 후 피로 관리 루틴",
    category: "직장인 피로 관리",
    excerpt: "오산 생활권에서 저녁 시간이 짧은 직장인을 위해 식사, 휴식, 방문 문의 순서를 정리했습니다.",
    audience: "오산 직장인",
    readTime: "6분"
  },
  {
    slug: "reservation-phone-checklist",
    title: "전화예약 전에 확인하면 좋은 지역·시간·준비사항",
    category: "출장마사지 이용 가이드",
    excerpt: "전화 문의 전에 준비하면 상담이 빨라지는 지역, 시간, 인원, 출입 정보를 체크리스트로 정리했습니다.",
    audience: "첫 문의 이용자",
    readTime: "5분"
  },
  {
    slug: "safe-visit-service-checkpoints",
    title: "건전한 방문 서비스를 고르기 전 확인해야 할 안전 기준",
    category: "서비스 안전 가이드",
    excerpt: "과장 광고, 개인정보 요청, 운영지역 불일치처럼 예약 전 반드시 확인해야 할 안전 기준을 다룹니다.",
    audience: "안전 기준 확인자",
    readTime: "6분"
  },
  {
    slug: "visit-massage-faq-summary",
    title: "방문 마사지 예약 전 자주 묻는 질문 모음",
    category: "FAQ 모음",
    excerpt: "가능지역, 당일 예약, 요금 확인, 방문 전 준비처럼 반복되는 질문을 읽기 쉽게 묶었습니다.",
    audience: "예약 전 확인자",
    readTime: "5분"
  }
];

export const faqs = [
  {
    q: "출장마사지 예약은 어떻게 하나요?",
    a: `${site.phone}로 전화해 지역, 희망 시간, 이용 인원을 알려주시면 예약 가능 여부를 안내합니다.`
  },
  {
    q: "현재 가능한 지역은 어디인가요?",
    a: "수원, 동탄, 오산, 용인, 분당을 중심으로 안내하며 세부 가능 여부는 전화로 확인합니다."
  },
  {
    q: "당일 예약도 가능한가요?",
    a: "예약 상황과 이동 가능 시간에 따라 달라집니다. 당일 이용은 가능한 한 빠르게 전화 문의해 주세요."
  },
  {
    q: "요금은 어떻게 확인하나요?",
    a: "지역, 시간, 프로그램에 따라 달라질 수 있어 전화 상담 시 정확히 안내합니다."
  },
  {
    q: "방문 전 준비할 것이 있나요?",
    a: "편안히 쉴 수 있는 공간과 충분한 시간을 확보해 주시면 됩니다."
  }
];
