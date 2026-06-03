import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { magazinePosts, site } from "@/lib/site-data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return magazinePosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = magazinePosts.find((item) => item.slug === params.slug);
  return {
    title: post?.title ?? "매거진",
    description: post ? `${post.title}에 대한 방문 마사지 예약 안내입니다.` : "방문 마사지 매거진"
  };
}

export default function MagazineDetailPage({ params }: Props) {
  const post = magazinePosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name }
  };

  return (
    <>
      <JsonLd data={article} />
      <PageHero eyebrow={post.category} title={post.title} description="실제 예약 문의 전 확인하면 좋은 기준을 과장 없이 정리했습니다." />
      <article className="section">
        <div className="container max-w-3xl">
          <div className="rounded-md bg-white p-7 leading-8 shadow-sm">
            <p>
              방문 마사지 예약은 지역, 희망 시간, 이용 목적을 먼저 확인하는 것이 좋습니다. 특히 당일 예약은 이동 동선과 기존 예약 상황에 따라 가능 여부가 달라질 수 있습니다.
            </p>
            <h2 className="mt-8 text-2xl font-black">확인해야 할 기준</h2>
            <p className="mt-4">
              예약 전에는 가능지역, 예상 소요 시간, 상담 방식, 취소 기준을 확인해 주세요. 의료 효과를 보장하거나 과장된 후기를 내세우는 표현보다는 실제 운영 기준이 명확한 안내가 중요합니다.
            </p>
            <h2 className="mt-8 text-2xl font-black">전화 문의 시 준비할 내용</h2>
            <p className="mt-4">
              지역명, 희망 시간대, 이용 인원, 문의 목적을 알려주시면 더 빠르게 상담할 수 있습니다. 쓰리 마사지는 전화예약을 통해 운영지역과 가능 시간을 안내합니다.
            </p>
            <a className="focus-ring mt-8 inline-flex rounded-md bg-leaf px-5 py-4 font-bold text-white" href={`tel:${site.tel}`}>
              전화예약 {site.phone}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
