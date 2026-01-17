import {
  Code,
  Layout,
  Smartphone,
  Search,
  TrendingUp,
  PenTool,
  BarChart3,
  ShieldCheck,
  Globe,
} from "lucide-react";

export const services = [
  {
    title: "Website Development",
    desc: "Fast, secure, and scalable websites built to convert visitors into customers.",
    icon: Code,
  },
  {
    title: "Web Design",
    desc: "Modern, user-friendly designs that reflect your brand and engage users.",
    icon: Layout,
  },
  {
    title: "Mobile App Development",
    desc: "Custom iOS & Android apps designed for performance and growth.",
    icon: Smartphone,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve Google rankings, organic traffic, and local visibility.",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies to generate leads and grow your business online.",
    icon: TrendingUp,
  },
  {
    title: "Content Marketing",
    desc: "SEO-optimized content that builds trust and drives conversions.",
    icon: PenTool,
  },
  {
    title: "Performance & Analytics",
    desc: "Track user behavior, conversions, and growth with actionable insights.",
    icon: BarChart3,
  },
  {
    title: "Website Maintenance & Security",
    desc: "Ongoing updates, backups, and security to keep your site running smoothly.",
    icon: ShieldCheck,
  },
  {
    title: "Business & Startup Solutions",
    desc: "End-to-end digital solutions tailored for startups and growing businesses.",
    icon: Globe,
  },
];

export const faqData = (city: any) => [
  {
    q: `What IT services does Quantumtech Digital provide in ${city.name}?`,
    a: `Quantumtech Digital offers website development, mobile app development (iOS & Android), SEO, digital marketing, and custom software solutions for businesses in ${city.name}.`,
  },
  {
    q: `How much does website development cost in ${city.name}?`,
    a: `Our website development pricing starts from ₹4999. The final cost depends on features, design complexity, and business requirements.`,
  },
  {
    q: `Do you provide SEO services for local businesses in ${city.name}?`,
    a: `Yes, we provide local SEO and organic SEO services in ${city.name} to help businesses improve search rankings and attract qualified leads.`,
  },
  {
    q: `Can you develop mobile apps for businesses in ${city.name}?`,
    a: `Absolutely. We build high-performance Android and iOS mobile applications tailored to your business goals and target audience.`,
  },
  {
    q: `How long does it take to build a website?`,
    a: `A basic business website usually takes 7–14 days. Larger or custom projects may take more time depending on requirements.`,
  },
  {
    q: `Do you work with startups and small businesses in ${city.name}?`,
    a: `Yes, we work with startups, small businesses, and growing companies in ${city.name}, offering affordable and scalable digital solutions.`,
  },
  {
    q: `Do you provide ongoing support after project completion?`,
    a: `Yes, we offer ongoing website maintenance, performance optimization, and technical support to ensure long-term success.`,
  },
];

export const testimonialData = (city: any) => [
  {
    name: "Amit Kumar",
    company: "Local Retail Business",
    location: `${city.name}, ${city.state}`,
    rating: 5,
    text: `Quantumtech Digital helped us build a professional website that improved our online presence and customer inquiries in ${city.name}.`,
  },
  {
    name: "Neha Sharma",
    company: "Startup Founder",
    location: `${city.name}, ${city.state}`,
    rating: 5,
    text: `The team understood our requirements clearly and delivered a modern, fast website on time. Great experience working with Quantumtech Digital.`,
  },
  {
    name: "Rahul Verma",
    company: "Marketing Manager",
    location: `${city.name}, ${city.state}`,
    rating: 4,
    text: `Their SEO and digital marketing services helped us improve visibility and generate quality leads consistently.`,
  },
  {
    name: "Tanya Singh",
    company: "Small Business Owner",
    location: `${city.name}, ${city.state}`,
    rating: 5,
    text: `Affordable pricing, transparent communication, and excellent support. Highly recommended IT services company in ${city.name}.`,
  },
];
