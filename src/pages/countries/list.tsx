import { Link } from "react-router-dom";
import { type Country } from "../../types/country.type";

interface CountriesListProps {
  countries: Country[];
}
export function CountriesList({ countries }: CountriesListProps) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {countries.map((item) => (
        <Link to={`/${item.alpha2Code}`} key={item.name}>
          <div className="rounded-lg shadow-md bg-palette-light-paper dark:bg-palette-dark-paper flex flex-col overflow-hidden">
            <img
              src={item.flag}
              className="aspect-video object-cover"
              alt={item.name}
            />
            <div className="p-4 text-palette-light-text dark:text-palette-dark-text">
              <h3 className="text-lg font-bold mb-4">{item.name}</h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <strong className="font-semibold">Population:</strong>
                  <span>{item.population}</span>
                </div>
                <div className="flex gap-2">
                  <strong className="font-semibold">Region:</strong>
                  <span>{item.region}</span>
                </div>
                <div className="flex gap-2">
                  <strong className="font-semibold">Capital:</strong>
                  <span>{item.capital}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
