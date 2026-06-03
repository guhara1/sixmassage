import Link from "next/link";

type InternalLink = {
  href: string;
  label: string;
  description: string;
};

type InternalLinksProps = {
  title?: string;
  description?: string;
  links: InternalLink[];
};

export function InternalLinks({
  title = "함께 확인하면 좋은 페이지",
  description = "현재 페이지와 목적이 이어지는 내부 페이지입니다. 같은 앵커를 반복하지 않고, 사용자가 다음에 확인할 내용을 기준으로 연결합니다.",
  links
}: InternalLinksProps) {
  return (
    <section className="support-panel mt-10 rounded-md border border-black/10 bg-mint p-5">
      <div className="mb-5">
        <p className="text-sm font-bold text-gold">Internal Links</p>
        <h2 className="mt-2 text-2xl font-black text-leaf">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-ink/72">{description}</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {links.map((link) => (
          <Link className="readable-card focus-ring rounded-md border border-black/10 bg-white p-4 hover:border-leaf/50" href={link.href} key={link.href}>
            <span className="font-bold text-leaf">{link.label}</span>
            <span className="mt-2 block text-sm leading-6 text-ink/72">{link.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
