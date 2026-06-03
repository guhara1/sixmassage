import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "이용약관",
  description: "쓰리 마사지 서비스 이용약관입니다."
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="이용약관" description="서비스 이용 전 확인해야 할 기본 기준입니다." />
      <section className="section">
        <div className="container max-w-3xl rounded-md bg-white p-7 leading-8 shadow-sm">
          <p>본 사이트는 방문 마사지 예약 안내와 전화 문의 연결을 목적으로 운영됩니다.</p>
          <p className="mt-4">예약 가능 여부, 요금, 일정은 지역과 상황에 따라 달라질 수 있으며 전화 상담을 통해 확인합니다.</p>
          <p className="mt-4">의료 행위, 치료 효과 보장, 과장된 후기는 제공하지 않습니다.</p>
        </div>
      </section>
    </>
  );
}
