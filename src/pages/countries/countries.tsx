import { useState } from "react";
import { CountriesFilters } from "./filters";
import { useCountries } from "../../hooks/countries/use-countries";
import { useRegions } from "../../hooks/countries/use-regions";
import { useDebounce } from "usehooks-ts";
import { useFilters } from "../../hooks/countries/use-filters";
import { CountriesList } from "./list";
import { CountriesLoading } from "./loading";

export function CountriesPage() {
  const { data: countries, isLoading } = useCountries();
  const regions = useRegions(countries);

  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce(search, 500);

  const filteredCountries = useFilters(debounceValue, region, countries);

  return (
    <div className="flex flex-col gap-10">
      <CountriesFilters
        onRegionChange={setRegion}
        onSearch={setSearch}
        region={region}
        regions={regions}
        search={search}
      />

      {isLoading ? (
        <CountriesLoading />
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
    </div>
  );
}
