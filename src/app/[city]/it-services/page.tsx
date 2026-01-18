import {
  getCityBySlug,
  getAllCities,
  getCitiesByState,
  formatServiceTitle,
  getCityAnchorText,
} from "@/utils/city";
import { Metadata } from "next";
import CTA from "@/components/CTA";
import { domain_url } from "@/constants/api";
import Breadcrumbs from "@/components/schema/Breadcrumbs";
import CitySchemas from "@/components/schema/CitySchema";
import CityTestimonials from "@/components/schema/CityTestimonials";
import CityFAQ from "@/components/services/FAQ";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/constants/service";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: { city: string };
};

/** 🔥 Generates 1438 routes at build time */
export async function generateStaticParams() {
  return getAllCities().map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityDetails = getCityBySlug(city);

  if (!cityDetails) return {};

  const title = `Website Development & IT Services Company in ${cityDetails.name}, ${cityDetails.state} | Quantumtech Digital`;

  const description = `Quantumtech Digital is a leading website development and IT services company in ${cityDetails.name}, ${cityDetails.state}. We specialize in web development, web design, mobile app development, SEO, and digital marketing solutions for businesses and startups.`;

  const url = `${domain_url}/${cityDetails.slug}/it-services`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Quantumtech Digital",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  const cityDetails = getCityBySlug(city);
  if (!cityDetails) return null;

  return (
    <main className="bg-black text-white">
      {/* schema */}
      <CitySchemas city={cityDetails} />
      {/* content */}
      <section className="pt-28 pb-20 text-center container mx-auto px-6">
        <Breadcrumbs city={cityDetails} />

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
          Website Development & IT Services
          <span className="block mt-2">
            Company in <span className="text-blue-500">{cityDetails.name}</span>
          </span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-300">
          Quantumtech Digital provides professional website development, mobile
          app development, SEO, and digital marketing services in{" "}
          {cityDetails.name}, helping businesses grow online with scalable and
          result-driven solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button>Get Free Consultation</Button>
          <Button>View Our Work</Button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">
          Website Development Company in {cityDetails.name}
        </h2>

        <p className="mt-4 max-w-5xl mx-auto text-center text-gray-300">
          Quantumtech Digital is a trusted website development company in{" "}
          {cityDetails.name}, delivering modern, fast, mobile-friendly, and
          SEO-optimized websites. We help startups, small businesses, and
          enterprises build a strong online presence with scalable and
          conversion-focused web solutions.
        </p>

        <p className="mt-4 max-w-5xl mx-auto text-center text-gray-400">
          If you are looking for the best website development company in{" "}
          {cityDetails.name}, our expert team builds business websites,
          eCommerce platforms, landing pages, and custom web applications
          tailored to your goals.
        </p>
      </section>
      {/* Mobile app section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">
          Mobile App Development Company in {cityDetails.name}
        </h2>

        <p className="mt-4 max-w-4xl mx-auto text-center text-gray-300">
          We provide end-to-end mobile app development services in{" "}
          {cityDetails.name}, building secure and scalable Android and iOS
          applications for startups and enterprises.
        </p>
      </section>

      {/* service details */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center">
          Our IT & Digital Services in {cityDetails.name}
        </h3>

        <p className="mt-4 text-center text-gray-400 max-w-3xl mx-auto">
          We offer a complete range of IT and digital solutions to help
          businesses in {cityDetails.name} build a strong online presence and
          achieve sustainable growth.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={formatServiceTitle(service.title, cityDetails.name)}
              description={`${service.desc} We provide this service in ${cityDetails.name}.`}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      <CityTestimonials city={cityDetails} />

      <CityFAQ city={cityDetails} />

      <section className="container mx-auto px-6 py-16">
        <h4 className="text-3xl text-center font-semibold">
          Providing IT Services Across {cityDetails.state}
        </h4>

        <p className="mt-3 text-gray-300 max-w-3xl text-center mx-auto">
          Along with {cityDetails.name}, we also provide IT and website
          development services across other cities in {cityDetails.state}.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {getCitiesByState(cityDetails.state)
            .filter((c) => c.slug !== cityDetails.slug)
            .map((city, index) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/it-services`}
                className="px-4 py-2 bg-neutral-800 rounded-full text-sm hover:bg-blue-700"
              >
                {getCityAnchorText(city.name, index)}
              </Link>
            ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
