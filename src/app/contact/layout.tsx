import { domain_url } from "@/constants/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Quantumtech Digital | Website Development Company in Biharsharif, Bihar",

  description:
    "Contact Quantumtech Digital for website development, SEO, mobile app development, and digital marketing services in Biharsharif, Nalanda, Patna, Delhi NCR, and across India. Let’s grow your business online.",

  keywords: [
    "contact website developer in Biharsharif",
    "contact digital marketing agency Biharsharif",
    "website development company Biharsharif",
    "SEO services Biharsharif Nalanda",
    "Quantumtech Digital contact",
    "web design company in Biharsharif",
  ],

  alternates: {
    canonical: `${domain_url}/contact`,
  },

  openGraph: {
    title:
      "Contact Quantumtech Digital | Website & SEO Services in Biharsharif",
    description:
      "Get in touch with Quantumtech Digital for professional website development and digital marketing services in Biharsharif, Nalanda, and across India.",
    url: `${domain_url}/contact`,
    siteName: "Quantumtech Digital",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Quantumtech Digital",
              url: `${domain_url}/contact`,
            }),
          }}
        />
      </head>
      {children}
    </>
  );
}
