import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
export function CountryPage() {
  const { alpha2Code } = useParams();

  const country = data.find((item) => item.alpha2Code === alpha2Code);
  return (
    <div className="text-palette-dark-background">
      {alpha2Code}: {country?.name}
    </div>
  );
}
