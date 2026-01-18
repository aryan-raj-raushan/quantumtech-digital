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
  const reviews = getReviewSchema(city);

  const schemas = [
    /* 1️⃣ LocalBusiness (PRIMARY ENTITY) */
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#localbusiness`,
      name: "Quantumtech Digital",
      url: pageUrl,
      description: `Quantumtech Digital is a website development and IT services company in ${city.name}, ${city.state}, offering web development, web design, mobile app development, SEO, and digital marketing solutions.`,
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
      review: reviews,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: (
          reviews.reduce(
            (sum, r) => sum + Number(r.reviewRating.ratingValue),
            0,
          ) / reviews.length
        ).toFixed(1),
        reviewCount: reviews.length,
        bestRating: "5",
      },
    },

    /* 2️⃣ BreadcrumbList (NOT IT-ONLY) */
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
          name: `Website Development & IT Services in ${city.name}`,
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

    /* 4️⃣ Service (MULTI-SERVICE, CONNECTED) */
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#services`,
      name: `Website Development & Digital Services in ${city.name}`,
      serviceType: [
        "Website Development",
        "Web Design",
        "Mobile App Development",
        "IT Services",
        "SEO Services",
        "Digital Marketing",
      ],
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

    /* 5️⃣ WebPage (ALIGNED WITH H1) */
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: `Website Development & IT Services Company in ${city.name}`,
      url: pageUrl,
      description: `Looking for the best website development company in ${city.name}? Quantumtech Digital provides web development, mobile app development, SEO, and digital marketing services.`,
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
