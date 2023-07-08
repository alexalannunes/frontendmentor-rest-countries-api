import { type Country } from "../../types/country.type";

export function useRegions(countries?: Country[]) {
  const regionsSet = new Set(countries?.map((item) => item.region));
  const regions = Array.from(regionsSet);
  return regions;
}
