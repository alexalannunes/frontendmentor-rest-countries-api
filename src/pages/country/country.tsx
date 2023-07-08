import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../../hooks/country/use-country";
import { FaArrowLeft } from "react-icons/fa";

export function CountryPage() {
  const navigation = useNavigate();

  const { cca2 } = useParams();

  const handleBack = () => {
    navigation(-1);
  };

  if (!cca2) {
    return <Navigate to="/" />;
  }

  const { data: country, isLoading } = useCountry(cca2);

  if (isLoading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-palette-light-text dark:fill-palette-dark-text"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
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
