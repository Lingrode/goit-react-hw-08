import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={location?.state || "/contacts"} />
  ) : (
    children
  );
};

export default RestrictedRoute;
