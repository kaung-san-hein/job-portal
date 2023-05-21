import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// to protect auth page when authenticated
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
