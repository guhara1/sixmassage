import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { magazinePosts } from "@/lib/site-data";

export const metadata = {
  title: "매거진",
  description: "방문 마사지 예약 가이드, 지역별 이용 안내, 웰니스 정보를 제공합니다."
};

export default function MagazinePage() {
  return (
    <>
      <PageHero eyebrow="Magazine" title="매거진" description="예약 전 확인하면 좋은 정보와 지역별 이용 안내를 정리했습니다." />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-3">
          {magazinePosts.map((post) => (
            <Link className="focus-ring rounded-md border border-black/10 bg-white p-6 hover:border-leaf/40" href={`/magazine/${post.slug}`} key={post.slug}>
              <span className="text-xs font-bold text-gold">{post.category}</span>
              <h2 className="mt-3 text-xl font-bold leading-8">{post.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
