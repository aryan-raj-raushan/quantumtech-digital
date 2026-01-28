import {
  distributeCitiesByService,
  getFooterAnchor,
  getTopTierFooterCities,
} from "@/utils/city";
import Link from "next/link";

export const footerServices = [
  "Website Development",
  "Mobile App Development",
  "SEO Services",
  "Digital Marketing",
];

const TierCityServices = () => {
  const cities = getTopTierFooterCities(20);
  const distributed = distributeCitiesByService(cities, footerServices);

  return (
    <section className="bg-[#0C0D0D] border-t border-white/10 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerServices.map((service) => (
            <div key={service}>
              <h4 className="text-white font-semibold mb-4">{service}</h4>

              <ul className="space-y-2">
                {distributed[service]?.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}/it-services`}
                      className="text-sm text-gray-400 hover:text-accent-purple transition-colors"
                    >
                      {getFooterAnchor(service, city.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TierCityServices;
