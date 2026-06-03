import Link from "next/link";
import { site } from "@/lib/site-data";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-ivory/96 px-4 pb-[calc(10px+var(--safe-bottom))] pt-3 shadow-soft md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1fr_64px] gap-3">
        <Link className="focus-ring flex min-h-14 items-center justify-center rounded-md bg-mint text-sm font-bold text-leaf" href="/areas">
          가능지역·요금 확인
        </Link>
        <a className="focus-ring phone-pulse flex min-h-14 items-center justify-center rounded-md bg-gold text-lg font-bold text-white" href={`tel:${site.tel}`} aria-label="전화예약">
          ☎
        </a>
      </div>
    </div>
  );
}
