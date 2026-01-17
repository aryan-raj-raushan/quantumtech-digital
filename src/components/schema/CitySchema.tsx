import { domain_url } from "@/constants/api";
import { faqData, testimonialData } from "@/constants/service";

type City = {
  slug: string;
  name: string;
  state: string;
};

type Props = {
  city: City;
};

export const getReviewSchema = (city: any) =>
  testimonialData(city).map((t) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewBody: t.text,
    publisher: {
      "@type": "Organization",
      name: t.company,
    },
  }));
export default function CitySchemas({ city }: Props) {
  const pageUrl = `${domain_url}/${city.slug}/it-services`;

  const schemas = [
    /* 1️⃣ LocalBusiness */
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#localbusiness`,
      name: "Quantumtech Digital",
      url: pageUrl,
      priceRange: "₹4999+",
      parentOrganization: {
        "@id": `${domain_url}/#organization`,
      },
      areaServed: {
        "@type": "City",
        name: city.name,
        addressRegion: city.state,
        addressCountry: "IN",
      },
      review: getReviewSchema(city),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: (
          getReviewSchema(city).reduce(
            (sum, r) => sum + Number(r.reviewRating.ratingValue),
            0,
          ) / getReviewSchema(city).length
        ).toFixed(1),
        reviewCount: getReviewSchema(city).length,
        bestRating: "5",
      },
    },

    /* 2️⃣ BreadcrumbList (FIXED) */
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: domain_url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "IT Services",
          item: `${domain_url}/it-services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `IT Services in ${city.name}`,
          item: pageUrl,
        },
      ],
    },

    /* 3️⃣ FAQPage */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData(city).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
    /* 4️⃣ Service */
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "IT Services",
      provider: {
        "@id": `${domain_url}/#organization`,
      },
      areaServed: {
        "@type": "City",
        name: city.name,
        addressRegion: city.state,
        addressCountry: "IN",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "4999",
        availability: "https://schema.org/InStock",
      },
    },
    // 4️⃣ WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `IT Services in ${city.name}`,
      url: `${domain_url}/${city.slug}/it-services`,
      description: `Professional IT services in ${city.name} including web development, SEO, and digital marketing.`,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${domain_url}/#website`,
      },
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
