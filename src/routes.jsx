import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import ConfirmOrders from "./Views/Landing/components/Content/OrderPages/ConfirmOrders";


export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'/confirm-orders',
        element : <ConfirmOrders /> ,
       },
    ])
    return element
}