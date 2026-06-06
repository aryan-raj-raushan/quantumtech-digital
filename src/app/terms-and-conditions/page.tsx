"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import {
  ScrollText,
  Handshake,
  CreditCard,
  RefreshCw,
  Copyright,
  Ban,
  Scale,
  FileWarning,
  Pencil,
  PhoneCall,
} from "lucide-react";

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
const COMPANY_GSTIN = "09XXXXX0000X0XX"; // Placeholder — replace with actual GSTIN

const sections = [
  {
    icon: Handshake,
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement",
        text: `By accessing our website at quantumtechdigital.com, engaging ${COMPANY_NAME} for any IT service, or signing a project agreement, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.`,
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years of age and legally capable of entering into binding contracts under Indian law to use our services. By using our services, you confirm that you meet these requirements.",
      },
    ],
  },
  {
    icon: ScrollText,
    title: "Scope of Services",
    content: [
      {
        subtitle: "Services Offered",
        text: `${COMPANY_NAME} provides IT services including but not limited to: website design and development, mobile application development (Android & iOS), search engine optimisation (SEO), pay-per-click advertising (PPC), social media marketing, UI/UX design, content creation, and digital strategy consulting.`,
      },
      {
        subtitle: "Project Agreements",
        text: "Each project is governed by a separate Statement of Work (SOW) or Project Agreement document that specifies deliverables, timelines, milestones, and payment schedules. In case of any conflict between a Project Agreement and these Terms, the Project Agreement shall prevail.",
      },
      {
        subtitle: "Subcontracting",
        text: `${COMPANY_NAME} reserves the right to engage trusted subcontractors or freelancers to assist in delivering services. We remain fully responsible for the quality and confidentiality of work performed by any subcontractors engaged on your project.`,
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: [
      {
        subtitle: "Pricing & Invoicing",
        text: "All pricing is quoted in Indian Rupees (INR) unless otherwise agreed. Invoices are issued as per the milestone schedule defined in your Project Agreement. All prices are exclusive of applicable Goods and Services Tax (GST). GST will be levied as per prevailing rates under Indian law.",
      },
      {
        subtitle: "Payment Schedule",
        text: "Standard payment terms require a 50% advance payment before project commencement, with the remaining balance due upon project delivery or as per agreed milestones. Custom payment schedules may be arranged for long-term retainer engagements.",
      },
      {
        subtitle: "Late Payments",
        text: "Invoices not paid within the agreed due date shall attract a late payment fee of 1.5% per month on the outstanding amount. Quantumtech Digital reserves the right to pause all active project work until outstanding payments are cleared. Repeated defaults may result in termination of the service agreement.",
      },
      {
        subtitle: "Taxes",
        text: `${COMPANY_NAME} is registered under GST. GSTIN: ${COMPANY_GSTIN}. Clients are responsible for any applicable withholding taxes. TDS deducted (if applicable) must be promptly deposited and the TDS certificate provided to us within the statutory timelines.`,
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "Revisions & Change Requests",
    content: [
      {
        subtitle: "Included Revisions",
        text: "Each project includes a defined number of revision rounds as specified in the Project Agreement. Revisions must be consolidated and submitted in a single round; piecemeal revision requests may count as multiple rounds.",
      },
      {
        subtitle: "Out-of-Scope Changes",
        text: "Any changes to the agreed project scope, including new feature additions, design overhauls, or functional changes after approval, will be treated as a Change Request (CR). CRs are subject to additional charges and revised timelines, which will be communicated to you before implementation.",
      },
    ],
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Client-Owned Assets",
        text: "Upon receipt of full and final payment, all custom deliverables — including source code, design files, content, and documentation created specifically for your project — shall be assigned to you. Transfer of ownership is contingent on full payment being received.",
      },
      {
        subtitle: "Quantumtech Digital Assets",
        text: `${COMPANY_NAME} retains all rights to proprietary frameworks, libraries, tools, methodologies, and pre-existing intellectual property used in delivering services. Any such assets incorporated into your project are licensed to you on a non-exclusive, royalty-free basis for the purpose of operating the delivered solution.`,
      },
      {
        subtitle: "Portfolio Rights",
        text: `Unless you explicitly request otherwise in writing, ${COMPANY_NAME} reserves the right to showcase completed projects in our portfolio, case studies, and marketing materials, referencing your company name and project outcomes.`,
      },
    ],
  },
  {
    icon: Ban,
    title: "Prohibited Conduct",
    content: [
      {
        subtitle: "Restrictions",
        text: "You agree not to use our services or deliverables for any purpose that is unlawful, harmful, fraudulent, or prohibited under Indian law, including but not limited to: creating or distributing malicious software, conducting cyber attacks, infringing third-party intellectual property rights, promoting illegal activities, or violating any provisions of the Information Technology Act, 2000.",
      },
      {
        subtitle: "Content Responsibility",
        text: "Where content is supplied by the client, you are solely responsible for ensuring it does not infringe any third-party rights, is not defamatory, and complies with applicable law. Quantumtech Digital shall not be held liable for any legal consequences arising from client-supplied content.",
      },
    ],
  },
  {
    icon: FileWarning,
    title: "Termination",
    content: [
      {
        subtitle: "Termination by Client",
        text: "You may terminate a project engagement with 15 days written notice. Work completed up to the date of termination will be invoiced and is payable. Advance payments for uncompleted milestones will be refunded on a pro-rata basis after deducting costs incurred.",
      },
      {
        subtitle: "Termination by Quantumtech Digital",
        text: `${COMPANY_NAME} reserves the right to terminate any engagement immediately, without refund, in cases of: non-payment, breach of these Terms, client conduct that is abusive or threatening to our team, or instructions that would require us to violate applicable law or ethical standards.`,
      },
    ],
  },
  {
    icon: Scale,
    title: "Governing Law & Dispute Resolution",
    content: [
      {
        subtitle: "Governing Law",
        text: "These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Gautam Buddha Nagar (Noida), Uttar Pradesh, India.",
      },
      {
        subtitle: "Dispute Resolution",
        text: "In the event of any dispute, both parties agree to first attempt resolution through good-faith negotiation for a period of 30 days. If unresolved, disputes shall be submitted to arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator appointed by mutual agreement. The language of arbitration shall be English.",
      },
    ],
  },
  {
    icon: Pencil,
    title: "Amendments",
    content: [
      {
        subtitle: "Right to Modify",
        text: `${COMPANY_NAME} reserves the right to update these Terms & Conditions at any time. Material changes will be communicated via email to active clients at least 14 days before taking effect. Continued use of our services after the effective date constitutes acceptance of the revised Terms.`,
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
      transition={{ duration: 0.5, delay: index * 0.04 }}
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
          <div key={i - 1}>
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

export default function TermsPage() {
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
                <ScrollText size={20} className="text-accent-purple" />
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
                Terms &{" "}
                <span className="text-accent-purple">Conditions</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                These Terms & Conditions govern your use of {COMPANY_NAME}'s
                website and services. They establish a clear, fair framework for
                our working relationship — protecting both you and us.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
                <span>
                  Last updated:{" "}
                  <span className="text-gray-400">{LAST_UPDATED}</span>
                </span>
                <span>
                  Effective:{" "}
                  <span className="text-gray-400">{LAST_UPDATED}</span>
                </span>
                <span>
                  Jurisdiction:{" "}
                  <span className="text-gray-400">India (Noida, UP)</span>
                </span>
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
                <SectionBlock key={i - 1} section={section} index={i} />
              ))}

              {/* Full agreement note */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-white/8 rounded-2xl p-8 text-center"
              >
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                  By engaging {COMPANY_NAME}'s services, signing a Project
                  Agreement, or making a payment, you confirm that you have read,
                  understood, and agree to these Terms & Conditions in their
                  entirety.
                </p>
              </motion.div>
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
                    Sections
                  </h3>
                  <ul className="space-y-2">
                    {sections.map((s, i) => (
                      <li key={i - 1}>
                        <span className="text-sm text-gray-500 hover:text-accent-purple transition-colors cursor-default flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent-purple/40 shrink-0" />
                          {s.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Key highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="border border-white/8 rounded-2xl p-6"
                >
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    Key Points
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "50% advance before work begins",
                      "IP transfers on full payment",
                      "15-day termination notice required",
                      "Disputes resolved in Noida, UP",
                      "GST applicable on all invoices",
                    ].map((point, i) => (
                      <li
                        key={i - 1}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-purple mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="border border-accent-purple/20 rounded-2xl p-6 bg-accent-purple/5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <PhoneCall size={15} className="text-accent-purple" />
                    <h3 className="text-sm font-semibold text-white">
                      Have Questions?
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    For clarifications on any clause or your specific project
                    terms, reach out directly.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <p className="text-gray-400">{COMPANY_EMAIL}</p>
                    <p className="text-gray-400">{COMPANY_PHONE}</p>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                      {COMPANY_ADDRESS}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}