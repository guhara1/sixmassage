import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { areaPages } from "@/lib/site-data";

export const metadata = {
  title: "가능지역",
  description: "수원, 동탄, 오산, 용인, 분당 방문 마사지 예약 가능지역 안내입니다."
};

export default function AreasPage() {
  return (
    <>
      <PageHero eyebrow="Areas" title="가능지역 안내" description="지역을 무작위로 나열하지 않고 실제 운영 기준에 맞춘 권역 중심으로 안내합니다." />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-3">
          {areaPages.map((area) => (
            <Link className="focus-ring rounded-md border border-black/10 bg-white p-6 hover:border-leaf/40" href={`/areas/${area.slug}`} key={area.slug}>
              <h2 className="text-2xl font-black text-leaf">{area.name}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/66">인근 안내: {area.nearby.join(", ")}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
