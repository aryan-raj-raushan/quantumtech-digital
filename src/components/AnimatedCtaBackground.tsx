"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const layers: Array<{
  initial: { x: string; y: string; scale: number };
  animate: { x: string; y: string };
  transition: Transition;
  opacity: number;
}> = [
  {
    initial: { x: "-5%", y: "5%", scale: 1.15 },
    animate: { x: "5%", y: "-5%" },
    transition: {
      duration: 22,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 0.7,
  },
  {
    initial: { x: "5%", y: "-5%", scale: 1.25 },
    animate: { x: "-5%", y: "5%" },
    transition: {
      duration: 28,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 0.5,
  },
  {
    initial: { x: "2%", y: "-8%", scale: 1.1 },
    animate: { x: "-2%", y: "8%" },
    transition: {
      duration: 35,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 1,
  },
];

const AnimatedCtaBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-[-15%] w-[130%] h-[130%]"
          initial={layer.initial}
          animate={layer.animate}
          transition={layer.transition}
          style={{
            backgroundImage: `url("/bg.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: layer.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCtaBackground;
