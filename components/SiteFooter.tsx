import Link from "next/link";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-ink py-12 text-white">
      <div className="container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/72">
            수원, 동탄, 오산, 용인, 분당 중심 방문 마사지 예약 안내. 실제 가능지역과 예약 시간은 전화로 확인해 주세요.
          </p>
        </div>
        <div className="text-sm leading-7 text-white/78">
          <p>상호: {site.name}</p>
          <p>운영사: {site.company}</p>
          <p>대표: {site.owner}</p>
          <p>사업자등록번호: {site.registration}</p>
        </div>
        <div className="text-sm leading-7 text-white/78">
          <p>주소: {site.address}</p>
          <p>전화: {site.phone}</p>
          <div className="mt-4 flex gap-4">
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
