import { notFound } from "next/navigation";
import { EditorialNote } from "@/components/EditorialNote";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildMagazineSections } from "@/lib/deep-content";
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
  const sections = buildMagazineSections(post.slug, post.title, post.category);

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
            <EditorialNote reviewedFor={post.title} />
            {sections.map((section) => (
              <section className="mt-8" key={section.title}>
                <h2 className="text-2xl font-black text-leaf">{section.title}</h2>
                <p className="mt-4">{section.body}</p>
              </section>
            ))}
            <a className="focus-ring mt-8 inline-flex rounded-md bg-leaf px-5 py-4 font-bold text-white" href={`tel:${site.tel}`}>
              전화예약 {site.phone}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
