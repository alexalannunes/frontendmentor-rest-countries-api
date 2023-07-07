import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import { CountriesFilters } from "./filters";
import { CountriesList } from "./list";
import { useCountries } from "../../hooks/countries/use-countries";
import { useRegions } from "../../hooks/countries/use-regions";
import { useFilters } from "../../hooks/countries/use-filters";

export function CountriesPage() {
  const countries = useCountries();
  const regions = useRegions(countries);

  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce(search, 500);

  const filteredCountries = useFilters(countries, debounceValue, region);

  return (
    <div className="flex flex-col gap-10">
      <CountriesFilters
        onRegionChange={setRegion}
        onSearch={setSearch}
        region={region}
        regions={regions}
        search={search}
      />

      <CountriesList countries={filteredCountries} />
    </div>
  );
}
