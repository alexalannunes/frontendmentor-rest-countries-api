import { type Country } from "../../types/country.type";
import { api } from "../api";

export async function getCountries(): Promise<Country[]> {
  // return data.map((item) => ({
  //   name: {
  //     common: item.name.common,
  //     nativeName: {
  //       ara: {
  //         common: item.name.nativeName?.ara?.common,
  //       },
  //     },
  //   },
  //   tld: item.tld,
  //   currencies: item.currencies,
  //   languages: item.languages,
  //   region: item.region,
  //   subRegion: item.subregion,
  //   population: item.population,
  //   flags: item.flags,
  //   capital: item.capital,
  //   cca2: item.cca2,
  //   ccn3: item.ccn3,
  //   cca3: item.cca3,
  //   borders: item.borders,
  // }));

  const req = await api("/all");
  return req.data;
}
