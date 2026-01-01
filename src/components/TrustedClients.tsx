"use client";

import { motion } from "framer-motion";

type ClientLogo = {
  name: string;
  description?: string;
};

const clientLogos: ClientLogo[] = [
  { name: "InnovateCore" },
  { name: "QuantumLeap" },
  { name: "AuraFlow" },
  { name: "NexusGen" },
  { name: "SparkSolutions" },
  { name: "VortexLabs" },
  { name: "EchoBridge" },
  { name: "ZenithWorks" },
];

// duplicate for seamless loop
const marqueeLogos = [...clientLogos, ...clientLogos];

export default function TrustedClients() {
  return (
    <section className="py-20 bg-[#0C0D0D] border-y border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase tracking-wide">
          Trusted by 150+ Companies Worldwide
        </p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 w-48 mx-12 flex items-center justify-center"
              >
                <span className="text-white text-2xl md:text-3xl font-semibold opacity-70 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
