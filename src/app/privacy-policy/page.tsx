"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Shield, Eye, Lock, Database, Globe, Mail, RefreshCw, UserCheck } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const LAST_UPDATED = "May 18, 2026";
const COMPANY_NAME = "Quantumtech Digital";
const COMPANY_EMAIL = "connect@quantumtechdigital.com";
const COMPANY_PHONE = "+91 79820-82271";
const COMPANY_ADDRESS = "Noida Sector 62, Noida, Uttar Pradesh, India";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact us or engage our services, we may collect personal details including your full name, email address, phone number, company name, designation, and billing/mailing address.",
      },
      {
        subtitle: "Technical & Usage Data",
        text: "We automatically collect certain technical data when you visit our website, including your IP address, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and device identifiers. This data is collected via cookies and similar tracking technologies.",
      },
      {
        subtitle: "Project & Business Information",
        text: "In the course of delivering IT services, we may collect business-related information such as project requirements, business goals, existing infrastructure details, login credentials (stored securely), and other documents shared for service delivery purposes.",
      },
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "Your information is primarily used to provide, maintain, and improve our IT services including web development, SEO, mobile application development, and digital marketing. This includes communicating project updates, sending invoices, and providing technical support.",
      },
      {
        subtitle: "Marketing & Communications",
        text: "With your consent, we may use your email address to send promotional materials, newsletters, case studies, or service updates. You may opt out at any time by clicking the unsubscribe link in any marketing email or contacting us directly.",
      },
      {
        subtitle: "Legal & Compliance",
        text: "We may use and retain your information to comply with applicable Indian laws and regulations, including the Information Technology Act, 2000, and its amendments, to enforce our agreements, and to protect our legal rights.",
      },
    ],
  },
  {
    icon: Globe,
    title: "Data Sharing & Third Parties",
    content: [
      {
        subtitle: "Service Partners",
        text: "We may share necessary data with trusted third-party service providers who assist us in operating our business — such as cloud hosting providers (AWS, Google Cloud), payment processors, analytics platforms (Google Analytics), and email service providers. These partners are contractually obligated to maintain confidentiality.",
      },
      {
        subtitle: "Legal Obligations",
        text: "We may disclose your information to government authorities, law enforcement, or courts when required by law, judicial order, or governmental regulation applicable in India, including requirements under the Information Technology (Amendment) Act, 2008.",
      },
      {
        subtitle: "No Sale of Data",
        text: "Quantumtech Digital does not sell, rent, or trade your personal information to any third party for their independent marketing or commercial purposes, under any circumstance.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security practices to protect your data, including SSL/TLS encryption for data in transit, AES-256 encryption for sensitive data at rest, role-based access controls, regular security audits, and two-factor authentication for internal systems.",
      },
      {
        subtitle: "Breach Notification",
        text: "In the unlikely event of a data breach that affects your personal information, we will notify you within 72 hours of becoming aware of the breach, in accordance with applicable Indian data protection guidelines and the Digital Personal Data Protection Act, 2023.",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "Data Retention",
    content: [
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Client project data is retained for a minimum of 3 years post-project completion for audit and support purposes. Marketing data is retained until you withdraw consent.",
      },
      {
        subtitle: "Deletion Requests",
        text: "You may request deletion of your personal data at any time by contacting us. We will process deletion requests within 30 business days, subject to any legal obligations that require us to retain certain records.",
      },
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access the personal data we hold about you and to request corrections if any information is inaccurate or incomplete. Requests can be submitted via email to our data officer.",
      },
      {
        subtitle: "Withdrawal of Consent",
        text: "Where processing is based on your consent, you have the right to withdraw that consent at any time without affecting the lawfulness of processing prior to withdrawal.",
      },
      {
        subtitle: "Grievance Redressal",
        text: "In accordance with the Information Technology Act, 2000, and applicable rules, any grievances related to data processing may be directed to our Grievance Officer. We are committed to resolving complaints within 30 days of receipt.",
      },
    ],
  },
  {
    icon: Mail,
    title: "Cookies & Tracking",
    content: [
      {
        subtitle: "Types of Cookies",
        text: "Our website uses strictly necessary cookies (required for site functionality), performance cookies (Google Analytics for traffic analysis), and preference cookies (to remember your settings). We do not use cookies for targeted advertising without explicit consent.",
      },
      {
        subtitle: "Managing Cookies",
        text: "You can control and delete cookies through your browser settings. Disabling certain cookies may affect the functionality of our website. A full cookie consent banner is presented upon your first visit to our site.",
      },
    ],
  },
];

const SectionBlock = ({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) => {
  const Icon = section.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-white/8 rounded-2xl p-8 hover:border-accent-purple/30 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-accent-purple" />
        </div>
        <h2 className="text-xl font-semibold text-white">{section.title}</h2>
      </div>

      <div className="space-y-5">
        {section.content.map((item, i) => (
          <div key={i}>
            <h3 className="text-sm font-medium text-accent-purple mb-1.5 uppercase tracking-wider">
              {item.subtitle}
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section className="bg-[#0C0D0D] text-white min-h-screen">
        {/* Hero */}
        <div className="border-b border-white/8">
          <div className="container mx-auto px-6 py-32 sm:py-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield size={20} className="text-accent-purple" />
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
                Privacy{" "}
                <span className="text-accent-purple">Policy</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At {COMPANY_NAME}, your privacy is not a checkbox — it is a
                commitment. This policy explains how we collect, use, and protect
                your data in connection with our IT services across India.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
                <span>Last updated: <span className="text-gray-400">{LAST_UPDATED}</span></span>
                <span>Effective: <span className="text-gray-400">{LAST_UPDATED}</span></span>
                <span>Jurisdiction: <span className="text-gray-400">India</span></span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {sections.map((section, i) => (
                <SectionBlock key={i} section={section} index={i} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick nav */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border border-white/8 rounded-2xl p-6"
                >
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    On This Page
                  </h3>
                  <ul className="space-y-2">
                    {sections.map((s, i) => (
                      <li key={i}>
                        <span className="text-sm text-gray-500 hover:text-accent-purple transition-colors cursor-default flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent-purple/40 shrink-0" />
                          {s.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="border border-accent-purple/20 rounded-2xl p-6 bg-accent-purple/5"
                >
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Data / Privacy Queries
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    For any privacy concerns, data requests, or grievances,
                    reach out to our Data Officer.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">{COMPANY_EMAIL}</p>
                    <p className="text-gray-400">{COMPANY_PHONE}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{COMPANY_ADDRESS}</p>
                  </div>
                </motion.div>

                {/* Governing law */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="border border-white/8 rounded-2xl p-6"
                >
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Governing Law
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    This policy is governed by the laws of India, including the
                    Information Technology Act, 2000, the Digital Personal Data
                    Protection Act, 2023, and applicable rules thereunder.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}