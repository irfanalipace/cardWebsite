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

import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";
import OtpAuthentications from "./Views/New folder/OtpAuthentications";
import Registration from "./Views/New folder/Registration";
import Login from "./Views/New folder/Login";
import ForgetPassword from "./Views/New folder/ForgetPassword";
import VerifyPassword from "./Views/New folder/VerifyPassword";
import ChangePassword from "./Views/New folder/ChangePassword";

export default function Router() {
  let element = useRoutes([
    // Public Routes
    {
      path: "/",
      element: (
        <PublicRoute>
          <Landing />
        </PublicRoute>
      ),
    },

    {
      path: "/login",
      element: (
        <PublicRoute>
        <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/registration",
      element: (
        <PublicRoute>
        <Registration />
        </PublicRoute>
      ),
    },
    {
      path: "/forget-password",
      element: (
        <PublicRoute>
      <ForgetPassword />
        </PublicRoute>
      ),
    },
    {
      path: "/otp-authentication",
      element: (
        <PublicRoute>
         <OtpAuthentications />
        </PublicRoute>
      ),
    },
    {
      path: "/verify-password",
      element: (
        <PublicRoute>
       <VerifyPassword />
        </PublicRoute>
      ),
    },
    {
      path: "/change-password",
      element: (
        <PublicRoute>
          <ChangePassword />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: (
        <PublicRoute>
          <InformationLayout />
        </PublicRoute>
      ),
      children: [
        { path: "contact-us", element: <ContactUs /> },
        { path: "help-center", element: <HelpCenter /> },
        { path: "refund-policy", element: <RefundPolicy /> },
      ],
    },

    //Protected Routes
    {
      path: "/select-payment",
      element: (
        <PrivateRoute>
          <SelectPayment />
        </PrivateRoute>
      ),
    },
    {
      path: "/order-confirm",
      element: (
        <PrivateRoute>
          <ConfirmOrders />
        </PrivateRoute>
      ),
    },
    {
      path: "/account-setting",
      element: (
        <PrivateRoute>
          <AccountSetting />
        </PrivateRoute>
      ),
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <HistoryLayout />
        </PrivateRoute>
      ),
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