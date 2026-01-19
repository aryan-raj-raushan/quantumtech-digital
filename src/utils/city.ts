import cities from "@/constants/json/india-cities.json";

export type City = {
  slug: string;
  name: string;
  state: string;
};

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

export function formatServiceTitle(baseTitle: string, cityName: string) {
  switch (baseTitle) {
    case "Website Development":
      return `Best Website Development Company in ${cityName}`;

    case "Web Design":
      return `Top Web Design Services in ${cityName}`;

    case "Mobile App Development":
      return `Mobile App Development Company in ${cityName}`;

    case "Search Engine Optimization (SEO)":
      return `SEO Company in ${cityName}`;

    case "Digital Marketing":
      return `Digital Marketing Agency in ${cityName}`;

    default:
      return `Professional ${baseTitle} Services in ${cityName}`;
  }
}

export function getCityAnchorText(cityName: string, index: number) {
  const anchors = [
    `Website Development in ${cityName}`,
    `Web Design Services in ${cityName}`,
    `Mobile App Development in ${cityName}`,
    `Best Website Development Company in ${cityName}`,
    `IT Services in ${cityName}`,
  ];

  return anchors[index % anchors.length];
}

const websiteDescriptionVariations = (cityName: string) => [
  `We are a leading website development company in ${cityName} delivering fast, secure, and scalable websites.`,
  `Our team of top website developers in ${cityName} builds SEO-friendly and conversion-focused websites.`,
  `Quantumtech Digital provides professional website development services in ${cityName} for businesses and startups.`,
];

export function formatServiceDescription(
  baseTitle: string,
  cityName: string,
  defaultDesc: string,
) {
  if (baseTitle === "Website Development") {
    const variations = websiteDescriptionVariations(cityName);
    return variations[Math.floor(Math.random() * variations.length)];
  }

  return `${defaultDesc} We provide this service in ${cityName}.`;
}
