import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "회사소개",
  description: "쓰리 마사지 운영사와 사업자 정보를 안내합니다."
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="쓰리 마사지 소개" description="지정 운영지역 중심의 방문 마사지 예약 안내 서비스를 제공합니다." />
      <section className="section" id="business">
        <div className="container max-w-3xl rounded-md bg-white p-7 leading-8 shadow-sm">
          <p>상호: {site.name}</p>
          <p>운영사: {site.company}</p>
          <p>대표: {site.owner}</p>
          <p>사업자등록번호: {site.registration}</p>
          <p>주소: {site.address}</p>
          <p>전화예약: {site.phone}</p>
        </div>
      </section>
    </>
  );
}
