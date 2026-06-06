"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { AlertTriangle, ExternalLink, Code2, TrendingUp, ShieldOff, FileText } from "lucide-react";

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

const sections = [
  {
    icon: FileText,
    title: "General Disclaimer",
    content:
      "The information provided on the Quantumtech Digital website and in any associated communications is for general informational and marketing purposes only. While we strive to keep all information accurate, complete, and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of any information, products, services, or related graphics contained on this website for any purpose.",
  },
  {
    icon: Code2,
    title: "IT Services & Project Outcomes",
    content:
      "Quantumtech Digital provides IT services including web development, mobile application development, SEO, and digital marketing. All project timelines, deliverable estimates, and performance projections communicated during pre-sales discussions or proposals are indicative only. Actual results may vary depending on factors including but not limited to client-side dependencies, third-party platform changes, market conditions, and scope changes. Quantumtech Digital does not guarantee specific business outcomes — such as revenue growth, lead generation volumes, or search engine rankings — as a result of any service rendered.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing Results",
    content:
      "Search engine optimization and digital marketing services involve techniques that depend on algorithms and policies of third-party platforms (including Google, Meta, and others) that are subject to change without notice. Quantumtech Digital does not guarantee first-page rankings, specific traffic increases, conversion rates, or return on advertising spend (ROAS). Past performance of campaigns managed for previous clients does not guarantee similar results for future or current clients. All case study statistics shared on our website represent results achieved under specific conditions and may not be replicable.",
  },
  {
    icon: ExternalLink,
    title: "Third-Party Links & Tools",
    content:
      "Our website and services may reference or integrate with third-party websites, tools, platforms, APIs, and services. Quantumtech Digital has no control over the content, privacy policies, security practices, or availability of external websites and services. The inclusion of any third-party link or integration does not imply endorsement, recommendation, or guarantee by Quantumtech Digital. We strongly advise reviewing the terms and privacy policies of any third-party service before use.",
  },
  {
    icon: ShieldOff,
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable Indian law, Quantumtech Digital, its directors, employees, partners, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, loss of data, loss of goodwill, service interruption, or computer damage — arising from your use of or inability to use our services or website, even if Quantumtech Digital has been advised of the possibility of such damages. Our total liability in any matter arising out of or related to this disclaimer shall not exceed the amount paid by you for the specific service giving rise to the claim.",
  },
  {
    icon: AlertTriangle,
    title: "Professional Advice",
    content:
      "Nothing on this website constitutes legal, financial, accounting, or business advice. Any content related to business strategy, compliance, or technical recommendations is shared for general awareness only. You should consult qualified professionals before making decisions based on any content published by Quantumtech Digital. We are an IT services company, not a legal, financial, or regulatory advisory firm.",
  },
];

export default function DisclaimerPage() {
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
                <AlertTriangle size={20} className="text-accent-purple" />
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
                Dis
                <span className="text-accent-purple">claimer</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Please read this disclaimer carefully before using the services
                or website of {COMPANY_NAME}. By accessing our platform or
                engaging our services, you acknowledge and agree to the
                limitations described herein.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
                <span>
                  Last updated:{" "}
                  <span className="text-gray-400">{LAST_UPDATED}</span>
                </span>
                <span>
                  Jurisdiction: <span className="text-gray-400">India</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Notice banner */}
        <div className="border-b border-amber-500/15 bg-amber-500/5">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-amber-400 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-400/80 leading-relaxed">
                <span className="font-medium text-amber-400">Important: </span>
                This disclaimer forms part of our Terms & Conditions and should
                be read in conjunction with our Privacy Policy. If you disagree
                with any part of this disclaimer, please discontinue use of our
                services.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="border border-white/8 rounded-2xl p-8 hover:border-accent-purple/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent-purple" />
                    </div>
                    <h2 className="text-lg font-semibold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              );
            })}

            {/* Changes notice */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-white/8 rounded-2xl p-8"
            >
              <h2 className="text-lg font-semibold text-white mb-4">
                Changes to This Disclaimer
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {COMPANY_NAME} reserves the right to update or modify this
                disclaimer at any time without prior notice. Changes will be
                effective immediately upon posting to our website. We encourage
                you to review this page periodically. Continued use of our
                website or services following any changes constitutes your
                acceptance of the revised disclaimer.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="border border-accent-purple/20 rounded-2xl p-8 bg-accent-purple/5"
            >
              <h2 className="text-lg font-semibold text-white mb-2">
                Questions About This Disclaimer?
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-4">
                If you have any questions or concerns regarding this disclaimer,
                please contact us at:
              </p>
              <p className="text-accent-purple font-medium">{COMPANY_EMAIL}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}