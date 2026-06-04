import type { Metadata } from "next";
import "./globals.css";
import { FloatingCta } from "@/components/FloatingCta";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "수원·동탄·오산·용인·분당 출장마사지 예약 안내 | 식스 마사지",
    template: "%s | 식스 마사지"
  },
  description:
    "식스 마사지는 수원, 동탄, 오산, 용인, 분당 일대 지역 중심으로 전화예약 가능한 방문 마사지 서비스를 안내합니다.",
  openGraph: {
    title: "식스 마사지",
    description: "방문 마사지 예약 안내와 가능지역 확인",
    url: site.url,
    siteName: site.name,
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "식스 마사지",
    description: "수원·동탄·오산·용인·분당 방문 마사지 예약 안내"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    telephone: site.phone
  };

  return (
    <html lang="ko">
      <body>
        <JsonLd data={organization} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingCta />
      </body>
    </html>
  );
}
