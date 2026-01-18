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
      return `Website Development in ${cityName}`;
    case "Web Design":
      return `Web Design Services in ${cityName}`;
    case "Mobile App Development":
      return `Mobile App Development in ${cityName}`;
    case "Search Engine Optimization (SEO)":
      return `SEO Services in ${cityName}`;
    case "Digital Marketing":
      return `Digital Marketing Services in ${cityName}`;
    default:
      return `${baseTitle} in ${cityName}`;
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
