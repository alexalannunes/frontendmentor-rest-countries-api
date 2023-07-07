import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import data from "../../assets/data.json";
import { CountriesFilters } from "./filters";
import { CountriesList } from "./list";
import { type Country } from "../../types/country.type";

const regionsSet = new Set(data.map((item) => item.region));
const regions = Array.from(regionsSet);

export function CountriesPage() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce(search, 500);

  const filteredCountriesSearch = data.filter((country) =>
    country.name.common.toLowerCase().includes(debounceValue.toLowerCase())
  );

  const filteredCountriesRegion = !region
    ? filteredCountriesSearch
    : filteredCountriesSearch.filter((country) => country.region === region);

  return (
    <div className="flex flex-col gap-10">
      <CountriesFilters
        onRegionChange={setRegion}
        onSearch={setSearch}
        region={region}
        regions={regions}
        search={search}
      />

      <CountriesList countries={filteredCountriesRegion as Country[]} />
    </div>
  );
}
