import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import SelectPayment from "./Views/SelectPayment/SelectPayment";
import InformationLayout from "./layouts/InformationLayout";
import ContactUs from "./Views/ContactUs";
import HelpCenter from "./Views/HelpCenter";
import RefundPolicy from "./Views/RefundPolicy";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/select-payment",
      element: <SelectPayment />,
    },
    {
      path: "/",
      element: <InformationLayout />,
      children: [
        { path: "contact-us", element: <ContactUs /> },
        { path: "help-center", element: <HelpCenter /> },
        { path: "refund-policy", element: <RefundPolicy /> },
      ],
    },
  ]);
  return element;
}



