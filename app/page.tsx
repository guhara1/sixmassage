import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { areaGroups, faqs, magazinePosts, site } from "@/lib/site-data";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#050705_0%,#10180f_56%,#0b1209_100%)]">
        <div className="container grid min-h-[calc(100vh-65px)] items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">전화예약 기반 방문 서비스</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">
              수원·동탄·오산·용인·분당 출장마사지 예약 안내
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              {site.name}는 지정 운영지역을 중심으로 예약 가능한 방문 마사지 서비스를 안내합니다. 지역별 가능 여부와 예약 시간은 전화로 확인해 주세요.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="focus-ring rounded-md bg-leaf px-6 py-4 text-center font-bold text-white" href={`tel:${site.tel}`}>
                전화예약: {site.phone}
              </a>
              <Link className="focus-ring rounded-md border border-leaf/25 px-6 py-4 text-center font-bold text-leaf" href="/areas">
                가능지역 확인
              </Link>
              <Link className="focus-ring rounded-md border border-leaf/25 px-6 py-4 text-center font-bold text-leaf" href="/service">
                이용절차 보기
              </Link>
            </div>
          </div>
          <div className="readable-card rounded-md border border-black/10 bg-white/72 p-5 shadow-soft">
            <p className="text-sm font-bold text-gold">운영지역 빠른 선택</p>
            <div className="mt-4 grid gap-3">
              {areaGroups.map((group) => (
                <Link className="readable-card focus-ring rounded-md border border-black/10 bg-white p-4 hover:border-leaf/40" href={group.href} key={group.name}>
                  <span className="font-bold text-leaf">{group.name}</span>
                  <span className="mt-2 block text-sm leading-6 text-ink/68">{group.areas.map((area) => area.name).join(", ")}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-4">
            {["방문 마사지 예약 안내", "사전 예약 및 전화 상담", "운영지역 지정 방문 서비스", "이용 전 문의 및 관리 안내"].map((title) => (
              <article className="readable-card rounded-md border border-black/10 p-5" key={title}>
                <h2 className="text-lg font-bold text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/66">피로 관리와 휴식을 위한 예약 정보를 명확하게 안내합니다.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mint">
        <div className="container grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold text-gold">FAQ</p>
            <h2 className="mt-3 text-3xl font-black">예약 전 자주 묻는 질문</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((item) => (
              <details className="readable-card rounded-md bg-white p-5" key={item.q}>
                <summary className="cursor-pointer font-bold">{item.q}</summary>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-gold">Magazine</p>
              <h2 className="mt-3 text-3xl font-black">최신 이용 가이드</h2>
            </div>
            <Link className="font-bold text-leaf" href="/magazine">전체 보기</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {magazinePosts.slice(0, 6).map((post) => (
              <Link className="readable-card focus-ring rounded-md border border-black/10 bg-white p-5 hover:border-leaf/40" href={`/magazine/${post.slug}`} key={post.slug}>
                <span className="text-xs font-bold text-gold">{post.category}</span>
                <h3 className="mt-3 text-lg font-bold leading-7">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
