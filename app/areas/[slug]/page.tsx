import { notFound } from "next/navigation";
import { EditorialNote } from "@/components/EditorialNote";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildAreaSections } from "@/lib/deep-content";
import { getAreaInternalLinks } from "@/lib/internal-links";
import { areaPages, faqs, site } from "@/lib/site-data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return areaPages.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props) {
  const area = areaPages.find((item) => item.slug === params.slug);
  return {
    title: area ? `${area.name} 출장마사지 예약 안내` : "지역 안내",
    description: area ? `${area.name} 방문 마사지 가능지역과 전화예약 확인사항을 안내합니다.` : "방문 마사지 지역 안내"
  };
}

export default function AreaDetailPage({ params }: Props) {
  const area = areaPages.find((item) => item.slug === params.slug);
  if (!area) notFound();
  const sections = buildAreaSections(params.slug);
  const internalLinks = getAreaInternalLinks(params.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.name} 방문 마사지 예약 안내`,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone },
    areaServed: [area.name, ...area.nearby]
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Area Guide"
        title={`${area.name} 출장마사지 예약 안내`}
        description={`${area.name} 및 인근 지역의 방문 마사지 예약 가능 여부와 상담 절차를 안내합니다. 정확한 가능 시간은 전화로 확인해 주세요.`}
      />
      <section className="section">
        <div className="container grid items-start gap-8 lg:grid-cols-[minmax(0,760px)_300px] lg:justify-center">
          <article className="prose-panel rounded-md bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">{area.name} 이용 안내</h2>
            <p className="mt-4 leading-8 text-ink/72">
              {area.name} 지역은 예약 시간과 이동 동선을 함께 확인한 뒤 안내합니다. 인근 지역은 {area.nearby.join(", ")} 중심으로 상담할 수 있습니다.
            </p>
            <EditorialNote reviewedFor={`${area.name} 지역 페이지`} />
            {sections.map((section) => (
              <section className="mt-8" key={section.title}>
                <h3 className="text-xl font-bold text-leaf">{section.title}</h3>
                <p className="mt-3 leading-8 text-ink/72">{section.body}</p>
              </section>
            ))}
            <section className="support-panel mt-8 rounded-md border border-black/10 bg-mint p-5">
              <h3 className="text-xl font-bold">예약 시 알려주시면 좋은 정보</h3>
              <ul className="mt-4 grid gap-3 text-ink/72">
                <li>희망 지역과 세부 위치</li>
                <li>원하는 예약 시간대</li>
                <li>이용 인원과 문의 목적</li>
                <li>공동현관, 주차, 출입 동선처럼 현장에서 확인하기 어려운 정보</li>
              </ul>
            </section>
            <InternalLinks
              title={`${area.name} 이용자가 이어서 확인할 페이지`}
              description="같은 권역의 세부 지역과 생활상황형 매거진을 연결해 지역 페이지와 정보성 글의 목적을 분리했습니다."
              links={internalLinks}
            />
          </article>
          <aside className="support-panel self-start rounded-md border border-black/10 bg-mint p-5">
            <h3 className="text-xl font-bold">자주 묻는 질문</h3>
            <div className="mt-5 grid gap-4">
              {faqs.slice(0, 3).map((item) => (
                <div key={item.q}>
                  <p className="font-bold">{item.q}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{item.a}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
