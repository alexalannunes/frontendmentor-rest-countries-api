import { getCountries } from "../../services/countries/country-service";

export function useCountries() {
  return getCountries();
}
