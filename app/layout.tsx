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
    "식스 마사지는 수원·동탄·오산·용인·분당권 방문 마사지 예약 정보를 안내합니다.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  verification: {
    google: "tLvzDmZ30YWnEXQJb7t1JHxf1OROGMjRlc_Yk5PiBkw",
    other: {
      "naver-site-verification": "52226623a4c2cbc6acc61ec279d90163ca7f2cdb"
    }
  },
  openGraph: {
    title: "식스 마사지",
    description: "운영지역과 전화예약 절차를 안내하는 방문 마사지 정보 사이트",
    url: site.url,
    siteName: site.name,
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "식스 마사지",
    description: "수원·동탄·오산·용인·분당권 방문 마사지 예약 정보"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: site.address,
    identifier: site.registration,
    areaServed: ["수원", "영통", "수원역", "인계동", "구운동", "동탄", "오산", "궐동", "용인", "처인구", "수지", "포곡", "신갈", "기흥", "동백", "분당", "미금역", "수내역", "정자역", "서현역"]
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
