import About from "@/components/About";
import SectionAnimator from "@/components/common/SectionAnimator";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustedClients from "@/components/TrustedClients";
import { domain_url } from "@/constants/api";

export const metadata = {
  title:
    "Quantumtech Digital | Best Website Development Company in Biharsharif, Nalanda",
  description:
    "Quantumtech Digital is the best website development and digital marketing company in Biharsharif, Nalanda, Bihar. We help businesses go online with websites, mobile apps, SEO, and digital marketing starting from ₹4999.",

  keywords: [
    "website development in Biharsharif",
    "web design company in Biharsharif",
    "digital marketing agency in Biharsharif",
    "SEO services in Nalanda Bihar",
    "mobile app development Biharsharif",
    "best website developer in Biharsharif",
    "Quantumtech Digital",
  ],

  authors: [{ name: "Quantumtech Digital" }],
  creator: "Quantumtech Digital",
  publisher: "Quantumtech Digital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: `${domain_url}/`,
  },

  openGraph: {
    title:
      "Best Website Development Company in Biharsharif | Quantumtech Digital",
    description:
      "Looking for website development in Biharsharif? Quantumtech Digital helps local businesses grow online with websites, apps, SEO & marketing.",
    url: `${domain_url}/`,
    siteName: "Quantumtech Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${domain_url}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Quantumtech Digital - Website Development in Biharsharif",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Quantumtech Digital | Website Development in Biharsharif, Bihar",
    description:
      "Best website & SEO service provider in Biharsharif, Nalanda. Affordable plans starting from ₹4999.",
    images: [`${domain_url}/service.png`],
  },

  category: "Digital Services",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionAnimator>
        <TrustedClients />
      </SectionAnimator>

      {/* <SectionAnimator>
        <Services />
      </SectionAnimator> */}

      <About />

      <SectionAnimator>
        <Portfolio />
      </SectionAnimator>

      <SectionAnimator>
        <Testimonials />
      </SectionAnimator>

      <SectionAnimator>
        <Stats />
      </SectionAnimator>

      <SectionAnimator>
        <CTA />
      </SectionAnimator>
    </>
  );
}
