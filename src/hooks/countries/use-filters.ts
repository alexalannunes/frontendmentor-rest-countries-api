import { type Country } from "../../types/country.type";

export function useFilters(
  search: string,
  region: string,
  countries?: Country[]
) {
  if (!countries) {
    return [];
  }

  const normalizedSearch = search.trim().toLowerCase();
  const normalizedRegion = search.time().toLowerCase();

  return countries.filter((country) => {
    return (!normalizedSearch || country.name.common.toLowerCase().includes(normalizedSearch)) && 
           (!normalizedRegion || country.region.toLowerCase() === normalizedRegion)
  )
}
