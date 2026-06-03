import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { areaGroups } from "@/lib/site-data";

export const metadata = {
  title: "가능지역",
  description: "수원, 동탄, 오산, 용인, 분당 방문 마사지 예약 가능지역 안내입니다."
};

export default function AreasPage() {
  return (
    <>
      <PageHero eyebrow="Areas" title="가능지역 안내" description="지역을 무작위로 나열하지 않고 실제 운영 기준에 맞춘 권역 중심으로 안내합니다." />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2">
          {areaGroups.map((group) => (
            <article className="rounded-md border border-black/10 bg-white p-6" key={group.name}>
              <Link className="focus-ring text-2xl font-black text-leaf" href={group.href}>
                {group.name}
              </Link>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {group.areas.map((area) => (
                  <Link className="focus-ring rounded-md border border-black/10 bg-mint px-4 py-3 font-semibold hover:border-leaf/40 hover:text-leaf" href={`/areas/${area.slug}`} key={area.slug}>
                    {area.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
