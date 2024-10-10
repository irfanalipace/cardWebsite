import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  return isAuthenticated ? <Navigate to="/history" replace /> : children;
};

export default PublicRoute;
