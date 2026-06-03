import Link from "next/link";
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
    description: post?.excerpt ?? "방문 마사지 매거진"
  };
}

export default function MagazineDetailPage({ params }: Props) {
  const post = magazinePosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const sections = buildMagazineSections(post.slug, post.title, post.category);
  const relatedPosts = magazinePosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2);
  const fallbackRelated = relatedPosts.length > 0 ? relatedPosts : magazinePosts.filter((item) => item.slug !== post.slug).slice(0, 2);

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
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <article className="section">
        <div className="container grid items-start gap-8 lg:grid-cols-[minmax(0,760px)_300px] lg:justify-center">
          <div className="prose-panel rounded-md bg-white p-8 leading-8 shadow-sm">
            <div className="mb-8 flex flex-wrap gap-2 text-xs font-bold text-ink/72">
              <span className="rounded-md bg-mint px-3 py-2 text-gold">{post.category}</span>
              <span className="rounded-md bg-mint px-3 py-2">{post.audience}</span>
              <span className="rounded-md bg-mint px-3 py-2">{post.readTime}</span>
            </div>
            <p className="border-l-4 border-leaf pl-5 text-lg leading-8 text-ink/80">{post.excerpt}</p>
            <div className="support-panel mt-8 rounded-md border border-black/10 bg-mint p-5">
              <p className="font-bold text-leaf">이 글에서 다루는 내용</p>
              <ol className="mt-3 grid gap-2 text-sm text-ink/72">
                {sections.map((section, index) => (
                  <li key={section.title}>{index + 1}. {section.title}</li>
                ))}
              </ol>
            </div>
            <div className="mt-8">
              <EditorialNote reviewedFor={post.title} />
            </div>
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
          <aside className="sticky top-24 grid gap-4 self-start">
            <div className="support-panel rounded-md border border-black/10 bg-mint p-5">
              <p className="text-sm font-bold text-gold">블로그 읽기 안내</p>
              <p className="mt-3 text-sm leading-7 text-ink/72">
                이 글은 정보 제공용입니다. 실제 가능지역과 예약 시간은 지역 상세 페이지 또는 전화 상담에서 확인해 주세요.
              </p>
            </div>
            <div className="readable-card rounded-md border border-black/10 bg-white p-5">
              <h2 className="font-bold text-leaf">관련 글</h2>
              <div className="mt-4 grid gap-3">
                {fallbackRelated.map((item) => (
                  <Link className="focus-ring rounded-md border border-black/10 bg-mint p-3 text-sm font-bold leading-6 hover:border-leaf/50" href={`/magazine/${item.slug}`} key={item.slug}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
