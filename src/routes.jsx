import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";


export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       
    ])
    return element
}