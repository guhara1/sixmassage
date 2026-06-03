import Link from "next/link";
import { InternalLinks } from "@/components/InternalLinks";
import { coreInternalLinks } from "@/lib/internal-links";
import { magazineCategories, magazineCategoryDetails, magazinePosts } from "@/lib/site-data";

export const metadata = {
  title: "매거진",
  description: "방문 마사지 예약 가이드, 지역별 이용 안내, 웰니스 정보를 제공합니다."
};

export default function MagazinePage() {
  const [featured, ...restPosts] = magazinePosts;

  return (
    <>
      <section className="border-b border-black/10 bg-[linear-gradient(120deg,#050705_0%,#10180f_56%,#0b1209_100%)] py-16 md:py-20">
        <div className="container">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Magazine Blog</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">생활권별 피로 관리와 방문 전 준비 가이드</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
                지역명만 바꾼 글을 쌓지 않고, 직장인 루틴·가족 공간·예약 전 확인사항처럼 실제 이용자가 판단할 수 있는 주제로 정리합니다.
              </p>
            </div>
            <Link className="readable-card focus-ring rounded-md border border-black/10 bg-white p-6 shadow-soft hover:border-leaf/50" href={`/magazine/${featured.slug}`}>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Featured</span>
              <h2 className="mt-4 text-3xl font-black leading-tight text-leaf">{featured.title}</h2>
              <p className="mt-4 leading-7 text-ink/72">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-ink/72">
                <span className="rounded-md bg-mint px-3 py-2">{featured.category}</span>
                <span className="rounded-md bg-mint px-3 py-2">{featured.audience}</span>
                <span className="rounded-md bg-mint px-3 py-2">{featured.readTime}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <nav className="mb-10 flex gap-2 overflow-x-auto text-sm font-bold" aria-label="매거진 카테고리">
            {magazineCategories.map((category) => (
              <Link className="focus-ring shrink-0 rounded-md border border-black/10 bg-mint px-4 py-3 text-leaf hover:border-leaf/50" href={category === "전체" ? "/magazine" : `/magazine?category=${encodeURIComponent(category)}`} key={category}>
                {category}
              </Link>
            ))}
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="grid gap-5 md:grid-cols-2">
              {restPosts.map((post) => (
                <Link className="readable-card focus-ring group rounded-md border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-leaf/50 hover:shadow-soft" href={`/magazine/${post.slug}`} key={post.slug}>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                    <span className="rounded-md bg-mint px-3 py-2 text-gold">{post.category}</span>
                    <span className="text-ink/68">{post.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black leading-snug group-hover:text-leaf">{post.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-ink/70">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-sm font-bold">
                    <span className="text-ink/68">{post.audience}</span>
                    <span className="text-leaf">읽기</span>
                  </div>
                </Link>
              ))}
            </div>

            <aside className="sticky top-24 grid gap-4 self-start">
              <div className="support-panel rounded-md border border-black/10 bg-mint p-5">
                <p className="text-sm font-bold text-gold">편집 원칙</p>
                <p className="mt-3 text-sm leading-7 text-ink/72">
                  매거진은 예약 전환용 지역 페이지와 분리해 운영합니다. 생활상황, 준비 기준, 안전 확인사항을 중심으로 작성하며 운영하지 않는 지역은 다루지 않습니다.
                </p>
              </div>
              {magazineCategoryDetails.map((category) => (
                <Link className="readable-card focus-ring rounded-md border border-black/10 bg-white p-4 hover:border-leaf/50" href={`/magazine?category=${encodeURIComponent(category.name)}`} key={category.name}>
                  <h3 className="font-bold text-leaf">{category.name}</h3>
                  <p className="mt-2 text-xs leading-6 text-ink/68">{category.description}</p>
                </Link>
              ))}
            </aside>
          </div>
          <InternalLinks
            title="매거진을 읽은 뒤 확인할 예약 관련 페이지"
            description="정보성 글에서 실제 운영지역과 예약 전 확인사항으로 이어지는 탐색 흐름입니다."
            links={coreInternalLinks.filter((link) => link.href !== "/magazine")}
          />
        </div>
      </section>
    </>
  );
}
