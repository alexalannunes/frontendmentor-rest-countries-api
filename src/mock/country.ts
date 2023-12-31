import { type Country } from "../types/country.type";

export const countryMock: Country = {
  name: {
    common: "Brazil",
  },
  cca2: "BR",
  ccn3: "076",
  cca3: "BRA",
  capital: ["Brasília"],
  region: "Americas",
  population: 212559409,
  flags: {
    png: "https://flagcdn.com/w320/br.png",
    svg: "https://flagcdn.com/br.svg",
  },
  currencies: {
    BRL: {
      name: "Brazilian real",
      symbol: "R$",
    },
  },
  languages: {
    por: "Portuguese",
  },
  subRegion: "South America",
  tld: [".br"],
  borders: [
    "ARG",
    "BOL",
    "COL",
    "GUF",
    "GUY",
    "PRY",
    "PER",
    "SUR",
    "URY",
    "VEN",
  ],
};
