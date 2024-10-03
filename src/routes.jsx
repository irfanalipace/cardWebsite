import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import SelectPayment from "./Views/SelectPayment/SelectPayment";
import InformationLayout from "./layouts/InformationLayout";
import ContactUs from "./Views/ContactUs";
import HelpCenter from "./Views/HelpCenter";
import RefundPolicy from "./Views/RefundPolicy";
import ConfirmOrders from "./Views/Landing/components/Content/OrderPages/ConfirmOrders";
import HistoryLayout from "./layouts/HistoryLayout";
import AccountSetting from "./Views/AccountSettings";
import NotificationSetting from "./Views/NotificationSettings";
import OrderHistoryPurchaseCard from "./Views/OrderHistory&PurchaseCards";

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
      path: "/order-confirm",
      element: <ConfirmOrders />,
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
    {
      path: "/",
      element: <HistoryLayout />,
      children: [
        { path: "account-setting", element: <AccountSetting /> },
        { path: "notification-setting", element: <NotificationSetting /> },
        {
          path: "history",
          element: <OrderHistoryPurchaseCard />,
        },
      ],
    },
  ]);
  return element;
}
