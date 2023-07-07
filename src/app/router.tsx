import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layout";
import { CountriesPage } from "../pages/countries/countries";
import { CountryPage } from "../pages/country/country";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CountriesPage />,
      },
      {
        path: ":cca2",
        element: <CountryPage />,
      },
    ],
  },
]);
