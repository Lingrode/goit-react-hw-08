import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

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

RestrictedRoute.propTypes = {
  children: PropTypes.node,
};

export default RestrictedRoute;
