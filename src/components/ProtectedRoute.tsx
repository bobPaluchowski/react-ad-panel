import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem("auth") === "true";
  return isAuthenticated ? element : <Navigate to="/error" />;
};

export default ProtectedRoute;

