import { domain_url } from "@/constants/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Quantumtech Digital – IT Services India",
  description:
    "Read the Privacy Policy of Quantumtech Digital. Learn how we collect, use, and protect your personal data in connection with our IT services across India.",
  keywords: [
    "Quantumtech Digital privacy policy",
    "IT company privacy policy India",
    "data protection IT services India",
    "website development company privacy",
  ],
  alternates: { canonical: `${domain_url}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | Quantumtech Digital",
    description:
      "How Quantumtech Digital collects, uses, and protects your data.",
    url: `${domain_url}/privacy-policy`,
    siteName: "Quantumtech Digital",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
