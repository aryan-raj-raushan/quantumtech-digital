import {
  capitalCities,
  secondaryTierCities,
  topTierCities,
} from "@/constants/json/cities";
import cities from "@/constants/json/india-cities.json";

export type City = {
  slug: string;
  name: string;
  state: string;
};

export type CityLevel =
  | "top" // Delhi, Mumbai, Bangalore
  | "secondary" // Noida, Pune, Indore
  | "capital" // Shimla, Dispur
  | "standard"; // others

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCities(): City[] {
  return cities;
}

export function getCitiesByState(state: string): City[] {
  return cities
    .filter((city) => city.state.toLowerCase() === state.toLowerCase())
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function formatServiceTitle(
  baseTitle: string,
  cityName: string,
  level: CityLevel,
) {
  switch (baseTitle) {
    case "Website Development":
      if (level === "top")
        return `Top Website Development Company in ${cityName} for Businesses & Startups`;

      if (level === "secondary")
        return `Best Website Development Company in ${cityName}`;

      if (level === "capital")
        return `Trusted Website Development Company in ${cityName}`;

      return `Best Website Development Company in ${cityName}`;

    case "Web Design":
      if (level === "top" || level === "secondary")
        return `Professional Web Design Company in ${cityName}`;

      return `Top Web Design Services in ${cityName}`;

    case "Mobile App Development":
      if (level === "top")
        return `Mobile App Development Company in ${cityName} – Android & iOS Experts`;

      if (level === "secondary")
        return `Mobile App Development Company in ${cityName}`;

      return `Mobile App Development Services in ${cityName}`;

    case "Search Engine Optimization (SEO)":
      if (level === "top")
        return `SEO Company in ${cityName} for Higher Rankings & Leads`;

      if (level === "secondary") return `SEO Company in ${cityName}`;

      return `SEO Services in ${cityName}`;

    case "Digital Marketing":
      if (level === "top")
        return `Digital Marketing Agency in ${cityName} for Business Growth`;

      if (level === "secondary")
        return `Digital Marketing Company in ${cityName}`;

      return `Digital Marketing Services in ${cityName}`;

    default:
      if (level === "top" || level === "secondary")
        return `Professional ${baseTitle} Company in ${cityName}`;

      return `Professional ${baseTitle} Services in ${cityName}`;
  }
}

export function getCityAnchorText(
  cityName: string,
  level: CityLevel,
  index: number,
) {
  const topAnchors = [
    `Top IT Services Company in ${cityName}`,
    `Website Development Company in ${cityName}`,
    `SEO & Digital Marketing Company in ${cityName}`,
    `Web & App Development Company in ${cityName}`,
  ];

  const secondaryAnchors = [
    `IT Services Company in ${cityName}`,
    `Website Development in ${cityName}`,
    `SEO Services in ${cityName}`,
    `Web Development Company in ${cityName}`,
  ];

  const defaultAnchors = [
    `Website Development in ${cityName}`,
    `Web Design Services in ${cityName}`,
    `Mobile App Development in ${cityName}`,
    `IT Services in ${cityName}`,
  ];

  let anchors = defaultAnchors;

  if (level === "top") anchors = topAnchors;
  else if (level === "secondary") anchors = secondaryAnchors;

  return anchors[index % anchors.length];
}

const websiteDescriptionVariations = (cityName: string) => [
  `We are a leading website development company in ${cityName} delivering fast, secure, and scalable websites.`,
  `Our team of top website developers in ${cityName} builds SEO-friendly and conversion-focused websites.`,
  `Quantumtech Digital provides professional website development services in ${cityName} for businesses and startups.`,
];

const websiteDescriptionByLevel = (cityName: string, level: CityLevel) => {
  if (level === "top") {
    return `Quantumtech Digital is a leading website development company in ${cityName}, delivering high-performance, SEO-friendly, and scalable websites for startups, SMEs, and enterprises.`;
  }

  if (level === "secondary") {
    return `We provide professional website development services in ${cityName}, helping growing businesses build fast, secure, and conversion-focused websites.`;
  }

  if (level === "capital") {
    return `Quantumtech Digital offers reliable website development services in ${cityName}, supporting businesses with modern and scalable digital solutions.`;
  }

  return `We offer website development services in ${cityName} focused on performance, security, and modern design.`;
};

export function formatServiceDescription(
  baseTitle: string,
  cityName: string,
  level: CityLevel,
  defaultDesc: string,
) {
  if (baseTitle === "Website Development") {
    return websiteDescriptionByLevel(cityName, level);
  }

  if (level === "top") {
    return `${defaultDesc} Our team helps businesses in ${cityName} scale faster with result-driven, enterprise-grade solutions.`;
  }

  if (level === "secondary") {
    return `${defaultDesc} We deliver reliable and growth-focused solutions for businesses in ${cityName}.`;
  }

  return `${defaultDesc} We provide this service in ${cityName}.`;
}

export function getCityLevel(slug: string): CityLevel {
  if (topTierCities.includes(slug)) return "top";
  if (secondaryTierCities.includes(slug)) return "secondary";
  if (capitalCities.includes(slug)) return "capital";
  return "standard";
}

export function getTierFooterCities(limit = 25) {
  const citySlugs = new Set<string>([...capitalCities, ...topTierCities]);

  return cities.filter((city) => citySlugs.has(city.slug)).slice(0, limit);
}

export function getServiceCityAnchor(service: string, cityName: string) {
  return `${service} in ${cityName}`;
}

export function getFooterCities(limit = 20) {
  const citySet = new Set([...capitalCities, ...topTierCities]);

  return cities.filter((city) => citySet.has(city.slug)).slice(0, limit);
}

export function getTopTierFooterCities(limit = 20) {
  const set = new Set(topTierCities);

  return cities.filter((city) => set.has(city.slug)).slice(0, limit);
}

export function distributeCitiesByService(
  cities: { slug: string; name: string }[],
  services: string[],
) {
  const map: Record<string, typeof cities> = {};
  services.forEach((s) => (map[s] = []));

  cities.forEach((city, index) => {
    map[services[index % services.length]].push(city);
  });

  return map;
}

// lib/getFooterAnchor.ts
export function getFooterAnchor(service: string, city: string) {
  switch (service) {
    case "Website Development":
      return `Website Development Company in ${city}`;

    case "Mobile App Development":
      return `Mobile App Development in ${city}`;

    case "SEO Services":
      return `SEO Company in ${city}`;

    case "Digital Marketing":
      return `Digital Marketing Agency in ${city}`;

    default:
      return `${service} in ${city}`;
  }
}
