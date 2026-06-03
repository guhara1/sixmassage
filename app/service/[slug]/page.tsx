import { notFound } from "next/navigation";
import { EditorialNote } from "@/components/EditorialNote";
import { PageHero } from "@/components/PageHero";
import { serviceDetailContent } from "@/lib/deep-content";
import { servicePages, site } from "@/lib/site-data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props) {
  const page = servicePages.find((item) => item.slug === params.slug);
  return {
    title: page?.title ?? "서비스 안내",
    description: `${page?.title ?? "서비스"}와 전화예약 확인사항을 안내합니다.`
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const page = servicePages.find((item) => item.slug === params.slug);
  if (!page) notFound();
  const content = serviceDetailContent[params.slug];

  return (
    <>
      <PageHero eyebrow="Service" title={page.title} description="지역, 희망 시간, 이용 목적을 전화로 확인한 뒤 예약 가능 여부를 안내합니다." />
      <section className="section">
        <div className="container grid items-start gap-8 lg:grid-cols-[minmax(0,760px)_280px] lg:justify-center">
          <article className="prose-panel rounded-md bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">이용 전 확인사항</h2>
            {content ? <p className="mt-4 leading-8 text-ink/72">{content.intro}</p> : null}
            <EditorialNote reviewedFor={page.title} />
            {content?.sections.map((section) => (
              <section className="mt-8" key={section.title}>
                <h3 className="text-xl font-bold text-leaf">{section.title}</h3>
                <p className="mt-3 leading-8 text-ink/72">{section.body}</p>
              </section>
            ))}
            <ul className="support-panel mt-8 grid gap-3 rounded-md border border-black/10 bg-mint p-5 text-ink/72">
              <li>운영지역과 방문 가능 시간은 예약 상황에 따라 달라질 수 있습니다.</li>
              <li>요금은 지역, 시간, 프로그램 기준을 확인한 뒤 안내합니다.</li>
              <li>의료 효과나 치료 보장을 의미하는 안내는 제공하지 않습니다.</li>
              <li>방문 전 편안히 쉴 수 있는 공간을 준비해 주세요.</li>
            </ul>
          </article>
          <aside className="support-panel self-start rounded-md border border-black/10 bg-mint p-5">
            <h3 className="text-xl font-bold">빠른 예약 문의</h3>
            <p className="mt-3 text-sm leading-6 text-ink/68">전화 상담으로 가능지역과 예약 시간을 확인할 수 있습니다.</p>
            <a className="focus-ring mt-6 inline-flex w-full justify-center rounded-md bg-leaf px-5 py-4 font-bold text-white" href={`tel:${site.tel}`}>
              {site.phone}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
