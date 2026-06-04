import Link from "next/link";
import { areaGroups, magazinePosts, servicePages, site } from "@/lib/site-data";

export function SiteFooter() {
  const mainAreas = areaGroups.flatMap((group) => group.areas).slice(0, 12);

  return (
    <footer className="border-t border-black/10 bg-[#030403] py-14 text-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr_1fr_1fr_1fr]">
          <section>
            <Link className="focus-ring text-2xl font-black text-leaf" href="/">
              {site.name}
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/72">
              수원권, 동탄·오산권, 용인권, 분당권 중심의 방문 마사지 예약 안내 사이트입니다. 실제 가능지역, 예약 시간, 이용 전 확인사항은 전화 상담으로 확인합니다.
            </p>
            <a className="focus-ring mt-5 inline-flex rounded-md bg-leaf px-5 py-4 text-sm font-black text-white" href={`tel:${site.tel}`}>
              전화예약 {site.phone}
            </a>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-gold">Service</h2>
            <nav className="mt-4 grid gap-3 text-sm text-white/78" aria-label="푸터 서비스 링크">
              {servicePages.map((page) => (
                <Link className="focus-ring hover:text-leaf" href={`/service/${page.slug}`} key={page.slug}>
                  {page.title}
                </Link>
              ))}
              <Link className="focus-ring hover:text-leaf" href="/faq">자주 묻는 질문</Link>
              <Link className="focus-ring hover:text-leaf" href="/contact">문의</Link>
            </nav>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-gold">Areas</h2>
            <nav className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/78" aria-label="푸터 운영지역 링크">
              {mainAreas.map((area) => (
                <Link className="focus-ring hover:text-leaf" href={`/areas/${area.slug}`} key={area.slug}>
                  {area.name}
                </Link>
              ))}
              <Link className="focus-ring font-bold text-leaf" href="/areas">전체 지역</Link>
            </nav>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-gold">Magazine</h2>
            <nav className="mt-4 grid gap-3 text-sm text-white/78" aria-label="푸터 매거진 링크">
              {magazinePosts.slice(0, 5).map((post) => (
                <Link className="focus-ring leading-6 hover:text-leaf" href={`/magazine/${post.slug}`} key={post.slug}>
                  {post.title}
                </Link>
              ))}
              <Link className="focus-ring font-bold text-leaf" href="/magazine">매거진 전체</Link>
            </nav>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-gold">Trust</h2>
            <div className="mt-4 grid gap-2 text-sm leading-7 text-white/78">
              <p>상호: {site.name}</p>
              <p>운영사: {site.company}</p>
              <p>대표: {site.owner}</p>
              <p>사업자등록번호: {site.registration}</p>
              <p>주소: {site.address}</p>
            </div>
            <nav className="mt-5 grid gap-3 text-sm text-white/78" aria-label="푸터 정책 링크">
              <Link className="focus-ring hover:text-leaf" href="/about">회사소개 및 편집 기준</Link>
              <Link className="focus-ring hover:text-leaf" href="/privacy">개인정보처리방침</Link>
              <Link className="focus-ring hover:text-leaf" href="/terms">이용약관</Link>
            </nav>
          </section>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 text-xs leading-6 text-white/60">
          <p>
            {site.name}는 운영지역과 전화예약 절차를 안내하는 정보 사이트입니다. 실제 확인 가능한 정보, 명확한 연락처, 편집 기준을 우선하며 과장되거나 오해를 줄 수 있는 표현은 사용하지 않습니다.
          </p>
          <p className="mt-2">Copyright © 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
