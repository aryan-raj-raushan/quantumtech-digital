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
    "Quantumtech Digital | Website Development & IT Services Company in India",

  description:
    "Quantumtech Digital is a leading website development and IT services company in India. We help businesses across all Indian cities grow online with websites, mobile apps, SEO, and digital marketing solutions starting from ₹4999.",

  keywords: [
    "website development company in India",
    "web design company in India",
    "IT services company in India",
    "digital marketing agency India",
    "SEO services in India",
    "mobile app development company India",
    "software development company India",
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
      "Website Development & IT Services Company in India | Quantumtech Digital",
    description:
      "Looking for a reliable website development company in India? Quantumtech Digital delivers modern websites, SEO, digital marketing, and IT services for businesses across all major Indian cities.",
    url: `${domain_url}/`,
    siteName: "Quantumtech Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${domain_url}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Quantumtech Digital - Website Development & IT Services in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Quantumtech Digital | Website Development & IT Services in India",
    description:
      "Affordable website development, SEO, and digital marketing services for businesses across India. Plans starting from ₹4999.",
    images: [`${domain_url}/service.png`],
  },

  category: "IT & Digital Services",
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
