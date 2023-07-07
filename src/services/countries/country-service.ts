import data from "../../assets/data.json";
import { type Country } from "../../types/country.type";

export function getCountries(): Country[] {
  return data.map((item) => ({
    name: {
      common: item.name.common,
    },
    region: item.region,
    population: item.population,
    flags: item.flags,
    capital: item.capital,
    cca2: item.cca2,
    ccn3: item.ccn3,
    cca3: item.cca3,
  }));
}
