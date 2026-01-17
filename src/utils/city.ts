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
