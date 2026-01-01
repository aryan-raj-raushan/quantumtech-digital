"use client";

import { motion, Transition } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Stats from "@/components/Stats";
import SectionAnimator from "@/components/common/SectionAnimator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projectData } from "@/constants/const";

/* -----------------------------
   PAGE ANIMATION
------------------------------ */
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

/* -----------------------------
   CLIENT PAGE
------------------------------ */
export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectData[projectId] || projectData["fintech-dashboard"];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-[#0C0D0D] text-white"
    >
      <main>
        {/* ================= TOP SECTION ================= */}
        <SectionAnimator>
          <header className="pt-48 pb-16">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                {project.description}
              </p>
            </div>
          </header>
        </SectionAnimator>

        {/* ================= HERO IMAGE ================= */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-accent-purple/10">
              <Image
                src="/stats-1.webp"
                alt={project.images.hero.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </SectionAnimator>

        {/* ================= GALLERY (2 IMAGES) ================= */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.gallery.slice(1, 3).map((img: any, i: number) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src={`/gallery-${i + 1}.webp`}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionAnimator>

        {/* ================= TEXT SECTION ================= */}
        <SectionAnimator>
          <section className="py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Challenge
                </h2>
                <p className="text-lg text-gray-400">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Solution
                </h2>
                <p className="text-lg text-gray-400">{project.solution}</p>
              </div>
            </div>
          </section>
        </SectionAnimator>

        {/* ================= SECOND GALLERY ================= */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/project.webp"
                alt={project.images.gallery2[0].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </SectionAnimator>

        {/* ================= STATS ================= */}
        <Stats customStats={project.stats} />

        {/* ================= CTA ================= */}
        <SectionAnimator>
          <section className="py-24 text-center">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let&apos;s discuss your next big idea and how we can bring it to
                life.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-accent-purple text-white hover:bg-accent-purple/90 group rounded-full text-lg py-7 px-10"
              >
                <Link href="/contact">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </section>
        </SectionAnimator>
      </main>
    </motion.div>
  );
}
