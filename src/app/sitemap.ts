import { domain_url } from "@/constants/api";
import { MetadataRoute } from "next";

const LAST_MODIFIED = new Date("2026-05-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${domain_url}/`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${domain_url}/project/social-media-app`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${domain_url}/project/fintech-dashboard`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${domain_url}/project/digital-marketing-agency-site`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${domain_url}/contact`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${domain_url}/sitemap-cities.xml`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
