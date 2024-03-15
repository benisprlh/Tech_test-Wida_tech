import { createBrowserRouter } from "react-router-dom";
import { AddInvoice } from "../pages/addInvoice";
import { ListInvoice } from "../pages/listInvoice";
import { ChartInvoice } from "../pages/chartInvoice";
import { NavBar } from "../components/navbar";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/add-invoice",
        element: <AddInvoice />,
      },
      {
        path: "/",
        element: <ListInvoice />,
      },
      {
        path: "/chart",
        element: <ChartInvoice />,
      },
    ],
  },
]);

export default router;
