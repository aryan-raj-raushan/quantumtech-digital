import SectionAnimator from "@/components/common/SectionAnimator";
import Hero from "@/components/Hero";
import TrustedClients from "@/components/TrustedClients";

export const metadata = {
  title: "Quantumtech Digital | Transform Your Brand",
  description:
    "We help businesses move from offline to online with websites, apps, SEO, and digital marketing.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionAnimator>
        <TrustedClients />
      </SectionAnimator>

      {/*<SectionAnimator>
        <Services />
      </SectionAnimator>

      <About />

      <SectionAnimator>
        <Portfolio />
      </SectionAnimator>

      <SectionAnimator>
        <Testimonials />
      </SectionAnimator>

      <SectionAnimator>
        <Stats />
      </SectionAnimator>

      <SectionAnimator>
        <CTA />
      </SectionAnimator> */}
    </>
  );
}
