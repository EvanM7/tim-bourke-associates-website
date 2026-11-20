import type { MetadataRoute } from "next";

// The replacement prototype must not compete with the current prostep.ie website.
export default function robots(): MetadataRoute.Robots {
  const siteLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";
  return {
    rules: { userAgent: "*", [siteLive ? "allow" : "disallow"]: "/" },
    ...(siteLive ? { sitemap: "https://prostep.ie/sitemap.xml" } : {}),
  };
}
