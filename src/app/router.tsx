import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layout";
import { CountriesPage } from "../pages/countries/countries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CountriesPage />,
      },
    ],
  },
]);
