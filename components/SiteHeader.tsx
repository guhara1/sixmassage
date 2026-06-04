import Link from "next/link";
import { areaGroups, magazineCategories, servicePages, site } from "@/lib/site-data";

const faqLinks = [
  { label: "예약 FAQ", href: "/faq#reservation" },
  { label: "지역 FAQ", href: "/faq#areas" },
  { label: "이용 전 확인사항", href: "/service/before-reservation" }
];

const companyLinks = [
  { label: "식스 마사지 소개", href: "/about" },
  { label: "사업자 정보", href: "/about#business" },
  { label: "문의", href: "/contact" }
];

export function SiteHeader() {
  const serviceLinks = servicePages.map((page) => ({ label: page.title, href: `/service/${page.slug}` }));
  const magazineLinks = magazineCategories.map((category) => ({
    label: category,
    href: category === "전체" ? "/magazine" : `/magazine?category=${encodeURIComponent(category)}`
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-ivory/95 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link className="focus-ring font-bold text-xl text-leaf" href="/">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/80 md:flex">
          <Link className="focus-ring hover:text-leaf" href="/">
            홈
          </Link>
          <Dropdown label="서비스 안내" links={serviceLinks} />
          <AreaDropdown />
          <Dropdown label="매거진(블로그)" links={magazineLinks} />
          <Dropdown label="FAQ" links={faqLinks} />
          <Dropdown label="회사소개" links={companyLinks} />
        </nav>
        <a
          className="focus-ring hidden rounded-md bg-leaf px-4 py-3 text-sm font-bold text-white md:inline-flex"
          href={`tel:${site.tel}`}
        >
          전화예약
        </a>
      </div>
      <div className="border-t border-black/5 md:hidden">
        <div className="container grid gap-2 py-3 text-sm font-semibold">
          <details className="rounded-md border border-black/10 bg-mint p-3">
            <summary className="cursor-pointer text-leaf">지역안내</summary>
            <div className="mt-3 grid gap-3">
              {areaGroups.map((group) => (
                <details className="rounded-md border border-black/10 bg-white p-3" key={group.name}>
                  <summary className="cursor-pointer text-leaf">{group.name}</summary>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {group.areas.map((area) => (
                      <Link className="focus-ring rounded-md px-2 py-2 text-ink/80 hover:text-leaf" href={`/areas/${area.slug}`} key={area.slug}>
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </details>
          <div className="flex gap-2 overflow-x-auto">
            <Link className="focus-ring shrink-0 rounded-md bg-mint px-3 py-2 text-leaf" href="/service">
              서비스 안내
            </Link>
            <Link className="focus-ring shrink-0 rounded-md bg-mint px-3 py-2 text-leaf" href="/magazine">
              매거진(블로그)
            </Link>
            <Link className="focus-ring shrink-0 rounded-md bg-mint px-3 py-2 text-leaf" href="/faq">
              FAQ
            </Link>
            <Link className="focus-ring shrink-0 rounded-md bg-mint px-3 py-2 text-leaf" href="/about">
              회사소개
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Dropdown({ label, links }: { label: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div className="group relative">
      <button className="focus-ring py-5 font-semibold hover:text-leaf" type="button">
        {label}
      </button>
      <div className="invisible absolute left-0 top-full w-64 rounded-md border border-black/10 bg-white p-3 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
        {links.map((link) => (
          <Link className="focus-ring block rounded-md px-3 py-2 text-sm text-ink/80 hover:bg-mint hover:text-leaf" href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function AreaDropdown() {
  return (
    <div className="group relative">
      <button className="focus-ring py-5 font-semibold hover:text-leaf" type="button">
        지역안내
      </button>
      <div className="invisible absolute left-1/2 top-full grid w-[720px] -translate-x-1/2 grid-cols-4 gap-3 rounded-md border border-black/10 bg-white p-4 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
        {areaGroups.map((group) => (
          <div key={group.name}>
            <Link className="focus-ring block rounded-md px-3 py-2 font-bold text-leaf hover:bg-mint" href={group.href}>
              {group.name}
            </Link>
            <div className="mt-1 grid gap-1">
              {group.areas.map((area) => (
                <Link className="focus-ring rounded-md px-3 py-2 text-sm text-ink/80 hover:bg-mint hover:text-leaf" href={`/areas/${area.slug}`} key={area.slug}>
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
