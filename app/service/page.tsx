import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { servicePages, site } from "@/lib/site-data";

export const metadata = {
  title: "서비스 안내",
  description: "방문 마사지 예약 안내, 프로그램, 이용절차, 요금 확인 방법을 안내합니다."
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="서비스 안내"
        description="방문 마사지 예약 전 확인하면 좋은 절차, 프로그램, 요금 문의 기준을 한곳에 정리했습니다."
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-3">
          {servicePages.map((page) => (
            <Link className="focus-ring rounded-md border border-black/10 bg-white p-6 shadow-sm hover:border-leaf/40" href={`/service/${page.slug}`} key={page.slug}>
              <h2 className="text-xl font-bold">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/66">예약 가능 여부는 {site.phone}로 확인해 주세요.</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
