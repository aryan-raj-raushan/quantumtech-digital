import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect With Us - Innovative Solutions",
  description:
    "Reach out to our team for innovative solutions, partnerships, and project inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
