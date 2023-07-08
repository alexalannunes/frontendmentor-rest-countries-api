import { useQuery } from "@tanstack/react-query";
import { type Country } from "../../types/country.type";
import { getCountry } from "../../services/country/get-country";

export function useCountry(cca2: string) {
  return useQuery<Country>(
    ["country", cca2],
    async () => await getCountry(cca2)
  );
}
