import { MetadataRoute } from "next";
import { getFrontendUrl } from "@/shared/utils/environment";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getFrontendUrl().replace(/\/$/, "");

  const routes = [
    "/",
    "/dashboard/gaming",
    "/utilities/thruster-requirement-calculator"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/utilities/thruster-requirement-calculator" ? "weekly" : "monthly",
    priority: route === "/utilities/thruster-requirement-calculator" ? 0.9 : 0.7
  }));
}
