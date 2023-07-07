import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../hooks/countries/use-countries";

export function CountryPage() {
  const navigation = useNavigate();

  const { cca2 } = useParams();

  const handleBack = () => {
    navigation(-1);
  };

  const countries = useCountries();
  const country = countries.find((item) => item.cca2 === cca2);

  return (
    <div className="flex flex-col gap-20">
      <button
        className="mt-12 outline-none gap-4 shadow-md justify-center rounded-md flex items-center px-4 h-12 bg-palette-light-paper dark:bg-palette-dark-paper focus-within:ring-2 dark:focus-within:ring-1 focus-within:ring-slate-200 focus-within:ring-offset-1 text-palette-light-text dark:text-palette-dark-text w-32"
        aria-label="Back"
        onClick={handleBack}
      >
        <FaArrowLeft />
        Back
      </button>

      {country ? (
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-24">
          <img
            className="w-full lg:w-[540px]"
            src={country.flags.svg}
            alt={country.name.common}
          />
          <div className="flex flex-col pt-10 items-start flex-1 text-palette-light-text dark:text-palette-dark-text">
            <h1 className="text-2xl mb-10 font-bold">{country.name.common}</h1>

            <div className="flex flex-col gap-12 md:flex-col sm:flex-col lg:flex-row w-full">
              <div className="flex flex-col gap-6 text-lg flex-1">
                <div className="flex gap-2">
                  <strong className="font-semibold">Population:</strong>
                  <span>
                    {Intl.NumberFormat("en-US").format(country.population)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <strong className="font-semibold">Region:</strong>
                  <span>{country.region}</span>
                </div>
                {country.subRegion && (
                  <div className="flex gap-2">
                    <strong className="font-semibold">Sub Region:</strong>
                    <span>{country.subRegion}</span>
                  </div>
                )}
                {country.capital && (
                  <div className="flex gap-2">
                    <strong className="font-semibold">Capital:</strong>
                    <span>{country.capital}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6 text-lg flex-1">
                {!!country.tld?.length && (
                  <div className="flex gap-2">
                    <strong className="font-semibold">Top Level Domain:</strong>
                    <span>{country.tld[0]}</span>
                  </div>
                )}
                {country.currencies && (
                  <div className="flex gap-2">
                    <strong className="font-semibold">Currencies:</strong>
                    <div className="flex gap-2">
                      {Object.keys(country.currencies).join(", ")}
                    </div>
                  </div>
                )}
                {country.languages && (
                  <div className="flex gap-2">
                    <strong className="font-semibold">Languages:</strong>
                    <span>{Object.keys(country.languages).join(", ")}</span>
                  </div>
                )}
              </div>
            </div>

            {!!country.borders?.length && (
              <div className="mt-12 flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Border Countries:</h2>
                <div className="flex gap-2 flex-wrap">
                  {country.borders.map((border) => (
                    <div
                      key={border}
                      className="py-2 px-8 shadow-md rounded-md flex items-start justify-center bg-palette-light-paper dark:bg-palette-dark-paper"
                    >
                      {border}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-palette-light-text dark:text-palette-dark-text">
          Country not found :(
        </h3>
      )}
    </div>
  );
}
