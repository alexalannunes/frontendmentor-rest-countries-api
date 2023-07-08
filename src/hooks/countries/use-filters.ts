import { type Country } from "../../types/country.type";

export function useFilters(
  search: string,
  region: string,
  countries?: Country[]
) {
  if (countries) {
    const filteredCountriesSearch = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    const filteredCountriesRegion = !region
      ? filteredCountriesSearch
      : filteredCountriesSearch.filter((country) => country.region === region);

    return filteredCountriesRegion;
  }
  return [];
}
