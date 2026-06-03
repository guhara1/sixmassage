import Link from "next/link";
import { areaGroups, site } from "@/lib/site-data";

const menu = [
  { label: "서비스 안내", href: "/service" },
  { label: "가능지역", href: "/areas" },
  { label: "매거진", href: "/magazine" },
  { label: "FAQ", href: "/faq" },
  { label: "문의", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-ivory/95 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link className="focus-ring font-bold text-xl text-leaf" href="/">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/80 md:flex">
          {menu.map((item) => (
            <Link className="focus-ring hover:text-leaf" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="focus-ring hidden rounded-md bg-leaf px-4 py-3 text-sm font-bold text-white md:inline-flex"
          href={`tel:${site.tel}`}
        >
          전화예약
        </a>
      </div>
      <div className="border-t border-black/5 md:hidden">
        <div className="container flex gap-2 overflow-x-auto py-3 text-sm font-semibold">
          {areaGroups.map((group) => (
            <Link className="focus-ring shrink-0 rounded-md bg-mint px-3 py-2 text-leaf" href={group.href} key={group.name}>
              {group.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
