import { type Country } from "../../types/country.type";
import { api } from "../api";

export async function getCountry(cca2: string): Promise<Country> {
  const req = await api(`/alpha/${cca2}`);
  return req.data[0];
}
