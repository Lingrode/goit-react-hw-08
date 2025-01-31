import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
