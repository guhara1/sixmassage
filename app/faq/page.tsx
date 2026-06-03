import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/site-data";

export const metadata = {
  title: "자주 묻는 질문",
  description: "방문 마사지 예약, 가능지역, 당일 예약, 요금 문의 관련 FAQ입니다."
};

export default function FaqPage() {
  const schema = {
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
      <JsonLd data={schema} />
      <PageHero eyebrow="FAQ" title="자주 묻는 질문" description="예약 전 궁금한 내용을 간단히 확인할 수 있습니다." />
      <section className="section" id="reservation">
        <div className="container max-w-3xl">
          <div className="mb-6 grid gap-3 md:grid-cols-3">
            <a className="focus-ring rounded-md border border-black/10 bg-mint px-4 py-3 text-center font-bold text-leaf" href="#reservation">
              예약 FAQ
            </a>
            <a className="focus-ring rounded-md border border-black/10 bg-mint px-4 py-3 text-center font-bold text-leaf" href="#areas">
              지역 FAQ
            </a>
            <a className="focus-ring rounded-md border border-black/10 bg-mint px-4 py-3 text-center font-bold text-leaf" href="/service/before-reservation">
              이용 전 확인사항
            </a>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <details className="readable-card rounded-md bg-white p-6 shadow-sm" key={item.q}>
                <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
                <p className="mt-3 leading-7 text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
          <div id="areas" className="pt-8" />
        </div>
      </section>
    </>
  );
}
