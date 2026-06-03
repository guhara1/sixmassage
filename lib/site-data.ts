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

export const magazinePosts = [
  {
    slug: "suwon-commuter-fatigue-routine",
    title: "수원에서 서울로 출퇴근하는 직장인의 피로 관리 방법",
    category: "직장인 피로 관리"
  },
  {
    slug: "yeongtong-after-work-neck-shoulder-care",
    title: "영통 거주 직장인을 위한 퇴근 후 어깨·목 피로 관리",
    category: "직장인 피로 관리"
  },
  {
    slug: "dongtan-family-weekend-wellness",
    title: "동탄 신도시 가족을 위한 주말 방문 웰니스 안내",
    category: "가족·주거공간 케어"
  },
  {
    slug: "yongin-suji-weekend-homecare",
    title: "용인 수지 거주자를 위한 주말 홈케어 준비법",
    category: "가족·주거공간 케어"
  },
  {
    slug: "bundang-jeongja-after-work-recovery",
    title: "분당 정자역 직장인을 위한 퇴근 후 컨디션 관리 가이드",
    category: "지역별 웰니스 가이드"
  },
  {
    slug: "osan-worker-evening-routine",
    title: "오산 직장인을 위한 퇴근 후 피로 관리 루틴",
    category: "직장인 피로 관리"
  },
  {
    slug: "reservation-phone-checklist",
    title: "전화예약 전에 확인하면 좋은 지역·시간·준비사항",
    category: "출장마사지 이용 가이드"
  },
  {
    slug: "safe-visit-service-checkpoints",
    title: "건전한 방문 서비스를 고르기 전 확인해야 할 안전 기준",
    category: "서비스 안전 가이드"
  },
  {
    slug: "visit-massage-faq-summary",
    title: "방문 마사지 예약 전 자주 묻는 질문 모음",
    category: "FAQ 모음"
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
