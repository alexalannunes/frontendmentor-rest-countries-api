import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function CountryPage() {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  };

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

      <h3>delkdew</h3>
    </div>
  );
}
