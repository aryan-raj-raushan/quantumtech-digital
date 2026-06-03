"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Transition } from "framer-motion";

/* Page animation */
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

/* Contact info block */
const ContactInfoBlock = ({
  title,
  lines,
  delay,
}: {
  title: string;
  lines: string[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-8"
  >
    <h3 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">
      {title}
    </h3>

    <div className="space-y-1">
      {lines.map((line, index) => (
        <p key={index} className="text-lg text-gray-200">
          {line}
        </p>
      ))}
    </div>
  </motion.div>
);

export default function ContactPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section className="bg-[#0C0D0D] text-white py-32 sm:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold uppercase mb-6 leading-tight">
                Connect <span className="text-accent-purple">with us</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-sm mb-16">
                Let&apos;s build something extraordinary together!
              </p>

              <motion.div
                className="flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a className="text-lg text-gray-300 hover:text-accent-purple transition">
                  LinkedIn
                </a>
                <a className="text-lg text-gray-300 hover:text-accent-purple transition">
                  Dribbble
                </a>
                <a className="text-lg text-gray-300 hover:text-accent-purple transition">
                  Behance
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <ContactInfoBlock
                    title="Project Inquiries"
                    lines={[
                      "connect@quantumtechdigital.com",
                      "+91 79820-82271",
                    ]}
                    delay={0.4}
                  />
                  {/* <ContactInfoBlock
                    title="Partnerships"
                    lines={[
                      "partners@innovatesolutions.com",
                      "+1 (555) 987-6543",
                    ]}
                    delay={0.6}
                  /> */}
                </div>

                <div>
                  <ContactInfoBlock
                    title="Our Studio"
                    lines={["Delhi, India"]}
                    delay={0.5}
                  />
                </div>
              </div>

              <motion.div
                className="overflow-hidden rounded-2xl shadow-2xl shadow-accent-purple/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Image
                  src="/contact.webp"
                  alt="Modern office space with creative design elements"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
