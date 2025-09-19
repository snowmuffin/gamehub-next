import { MetadataRoute } from "next";
import { getFrontendUrl } from "@/shared/utils/environment";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getFrontendUrl().replace(/\/$/, "");

  return {
    rules: [{ userAgent: "*" }],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
