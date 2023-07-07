import { type Country } from "../../types/country.type";

export function useFilters(
  countries: Country[],
  search: string,
  region: string
) {
  const filteredCountriesSearch = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCountriesRegion = !region
    ? filteredCountriesSearch
    : filteredCountriesSearch.filter((country) => country.region === region);

  return filteredCountriesRegion;
}
