import type { MetadataRoute } from "next";
import { areaPages, magazinePosts, servicePages, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-04T00:00:00+09:00");
  const staticRoutes = ["", "/service", "/areas", "/magazine", "/faq", "/about", "/contact", "/privacy", "/terms"];
  const serviceRoutes = servicePages.map((page) => `/service/${page.slug}`);
  const areaRoutes = areaPages.map((area) => `/areas/${area.slug}`);
  const magazineRoutes = magazinePosts.map((post) => `/magazine/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...magazineRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  })) as MetadataRoute.Sitemap;
}
