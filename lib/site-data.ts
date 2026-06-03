export const site = {
  name: "쓰리 마사지",
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
    areas: ["수원", "영통", "수원역", "인계동", "구운동"]
  },
  {
    name: "동탄·오산권",
    href: "/areas/dongtan",
    areas: ["동탄", "오산", "권선동"]
  },
  {
    name: "용인권",
    href: "/areas/yongin",
    areas: ["용인", "처인구", "수지", "죽전", "신갈", "기흥", "동백"]
  },
  {
    name: "분당권",
    href: "/areas/bundang",
    areas: ["분당", "미금역", "서현역", "정자역", "판교"]
  }
];

export const areaPages = [
  { slug: "suwon", name: "수원", nearby: ["영통", "수원역", "인계동", "구운동"] },
  { slug: "dongtan", name: "동탄", nearby: ["오산", "권선동"] },
  { slug: "osan", name: "오산", nearby: ["동탄", "권선동"] },
  { slug: "yongin", name: "용인", nearby: ["처인구", "수지", "죽전", "신갈", "기흥", "동백"] },
  { slug: "bundang", name: "분당", nearby: ["미금역", "서현역", "정자역", "판교"] }
];

export const servicePages = [
  { slug: "visit-massage", title: "출장마사지 안내" },
  { slug: "process", title: "프로그램 안내" },
  { slug: "price", title: "요금 안내" }
];

export const magazinePosts = [
  {
    slug: "first-visit-massage-checklist",
    title: "출장마사지 처음 이용 전 확인해야 할 7가지",
    category: "예약 가이드"
  },
  {
    slug: "phone-reservation-process",
    title: "방문 마사지 예약은 어떻게 진행될까? 전화예약 절차 안내",
    category: "예약 가이드"
  },
  {
    slug: "service-area-check",
    title: "출장마사지 가능지역을 확인해야 하는 이유",
    category: "지역별 이용 가이드"
  },
  {
    slug: "same-day-reservation-guide",
    title: "당일 출장마사지 예약 전 알아두면 좋은 점",
    category: "예약 가이드"
  },
  {
    slug: "before-massage-preparation",
    title: "마사지 이용 전 준비하면 좋은 공간과 시간 체크리스트",
    category: "이용 전 체크리스트"
  },
  {
    slug: "wellness-massage-guide",
    title: "피로 관리 목적의 방문 마사지, 어떤 기준으로 선택할까?",
    category: "웰니스"
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
