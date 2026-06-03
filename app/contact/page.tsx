import { InternalLinks } from "@/components/InternalLinks";
import { coreInternalLinks } from "@/lib/internal-links";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "문의",
  description: "쓰리 마사지 전화예약 및 문의 안내입니다."
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="문의 및 전화예약" description="가능지역과 예약 시간은 전화로 가장 빠르게 확인할 수 있습니다." />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="readable-card rounded-md bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">전화문의</h2>
            <p className="mt-4 text-ink/70">지역, 희망 시간, 이용 인원을 알려주시면 예약 가능 여부를 안내합니다.</p>
            <a className="focus-ring mt-6 inline-flex rounded-md bg-leaf px-5 py-4 font-bold text-white" href={`tel:${site.tel}`}>
              {site.phone}
            </a>
          </div>
          <div className="support-panel rounded-md bg-mint p-7">
            <h2 className="text-2xl font-black">사업자 정보</h2>
            <p className="mt-4 leading-8 text-ink/72">
              {site.company}<br />
              대표 {site.owner}<br />
              {site.address}
            </p>
          </div>
        </div>
        <div className="container">
          <InternalLinks
            title="문의 전 확인하면 좋은 페이지"
            description="전화하기 전에 운영지역과 예약 전 확인사항을 살펴보면 상담이 더 빠르고 명확해집니다."
            links={coreInternalLinks}
          />
        </div>
      </section>
    </>
  );
}
