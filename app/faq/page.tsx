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
      <section className="section">
        <div className="container max-w-3xl">
          <div className="grid gap-4">
            {faqs.map((item) => (
              <details className="rounded-md bg-white p-6 shadow-sm" key={item.q}>
                <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
                <p className="mt-3 leading-7 text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
