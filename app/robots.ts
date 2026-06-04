import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/"
      },
      {
        userAgent: "Yeti",
        allow: "/"
      },
      {
        userAgent: "NaverBot",
        allow: "/"
      },
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: [
      `${site.url}/sitemap.xml`,
      `${site.url}/sitemap1.xml`,
      `${site.url}/rss.xml`
    ]
  };
}
