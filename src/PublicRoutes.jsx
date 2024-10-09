import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const token = useSelector((state) => state?.auth?.token);

  return token ? <Navigate to="/history" replace /> : children;
};

export default PublicRoute;
