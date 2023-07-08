import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../services/countries/get-countries";
import { type Country } from "../../types/country.type";

export function useCountries() {
  return useQuery<Country[]>(["countries"], getCountries);
}
