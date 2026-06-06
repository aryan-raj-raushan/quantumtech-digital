import { domain_url } from "@/constants/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Quantumtech Digital – IT Services India",
  description:
    "Review the Terms & Conditions of Quantumtech Digital governing use of our website and IT services including web development, SEO, and digital marketing.",
  keywords: [
    "Quantumtech Digital terms and conditions",
    "IT company terms of service India",
    "web development agency terms India",
    "digital marketing agency terms",
  ],
  alternates: { canonical: `${domain_url}/terms-and-conditions` },
  openGraph: {
    title: "Terms & Conditions | Quantumtech Digital",
    description: "Terms governing use of Quantumtech Digital's IT services.",
    url: `${domain_url}/terms-and-conditions`,
    siteName: "Quantumtech Digital",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}