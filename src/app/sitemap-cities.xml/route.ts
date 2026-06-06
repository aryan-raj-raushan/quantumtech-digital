import { domain_url } from "@/constants/api";
import cities from "@/constants/json/india-cities.json";

const LAST_MODIFIED = "2026-05-18T00:00:00.000Z";

export async function GET(): Promise<Response> {
    const sortedCities = [...cities].sort((a, b) =>
        a.slug.localeCompare(b.slug),
    );

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sortedCities
    .map(
        (city) => `
  <url>
    <loc>${domain_url}/${city.slug}/it-services</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>`,
    )
    .join("")}
</urlset>`,
        {
            headers: {
                "Content-Type": "application/xml",
            },
        },
    );
}
