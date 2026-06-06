import { domain_url } from "@/constants/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Quantumtech Digital – IT Services India",
  description:
    "Read the Disclaimer of Quantumtech Digital regarding our IT services, SEO results, third-party links, and limitation of liability.",
  keywords: [
    "Quantumtech Digital disclaimer",
    "IT services disclaimer India",
    "SEO results disclaimer",
    "web development company disclaimer India",
  ],
  alternates: { canonical: `${domain_url}/disclaimer` },
  openGraph: {
    title: "Disclaimer | Quantumtech Digital",
    description: "Limitations and disclaimers applicable to Quantumtech Digital's IT services.",
    url: `${domain_url}/disclaimer`,
    siteName: "Quantumtech Digital",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function DisclaimerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}