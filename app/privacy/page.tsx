import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "개인정보처리방침",
  description: "쓰리 마사지 개인정보처리방침입니다."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Policy" title="개인정보처리방침" description="예약 문의 과정에서 필요한 최소한의 정보를 안내 목적으로 사용합니다." />
      <section className="section">
        <div className="container max-w-3xl rounded-md bg-white p-7 leading-8 shadow-sm">
          <p>수집 항목: 연락처, 예약 희망 지역, 예약 희망 시간, 상담에 필요한 내용</p>
          <p className="mt-4">이용 목적: 예약 가능 여부 확인, 상담 응대, 고객 안내</p>
          <p className="mt-4">보관 기간: 상담 목적 달성 후 관련 법령에 따른 보관 의무가 없는 경우 지체 없이 파기합니다.</p>
        </div>
      </section>
    </>
  );
}
