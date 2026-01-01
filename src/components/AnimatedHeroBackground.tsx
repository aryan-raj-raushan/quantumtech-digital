"use client";

import { motion } from "framer-motion";

type Layer = {
  initial: {
    x: string;
    y: string;
    scale: number;
  };
  animate: {
    x: string;
    y: string;
  };
  transition: {
    duration: number;
    repeat: number;
    repeatType: "mirror";
    ease: "easeInOut";
  };
  opacity: number;
};

const imageUrl =
  "https://horizons-cdn.hostinger.com/b325f2c7-3811-4d31-9daf-bbf79ab2051d/71f6723b117af5fb7e36d829dfcd6b7f.jpg";

const layers: Layer[] = [
  {
    initial: { x: "-5%", y: "-5%", scale: 1.1 },
    animate: { x: "5%", y: "5%" },
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 0.8,
  },
  {
    initial: { x: "5%", y: "5%", scale: 1.2 },
    animate: { x: "-5%", y: "-5%" },
    transition: {
      duration: 25,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 0.6,
  },
  {
    initial: { x: "0%", y: "10%", scale: 1.05 },
    animate: { x: "0%", y: "-10%" },
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 1,
  },
];

export default function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
          initial={layer.initial}
          animate={layer.animate}
          transition={layer.transition}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: layer.opacity,
          }}
        />
      ))}
    </div>
  );
}
