"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Portfolio = () => {
  const router = useRouter();
  const handleProjectClick = (slug: string) => {
    router.push(`/project/${slug}`);
  };
  return (
    <section id="portfolio" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase text-white">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              Explore our portfolio of{" "}
              <span className="text-accent-purple">creative solutions</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              Explore our portfolio full of creative solutions, from branding
              and web design to marketing campaigns that drive results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick("social-media-app")}
          >
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A dark-themed social media application interface shown on a smartphone"
              src="/portfolio-1.webp"
              width={500}
              height={400}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Next-Gen Banking UI
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick("fintech-dashboard")}
          >
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A fintech application dashboard with payment details, displayed on a smartphone next to a keyboard"
              src="/portfolio-2.webp"
              width={500}
              height={400}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Fintech Dashboard
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick("digital-marketing-agency-site")}
          >
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A digital marketing agency website homepage, shown on a smartphone with a sleek, modern design"
              src="/portfolio-3.webp"
              width={500}
              height={400}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Digital Marketing Agency Site
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
