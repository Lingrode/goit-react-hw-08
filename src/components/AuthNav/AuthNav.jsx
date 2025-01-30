import { NavLink } from "react-router";

const AuthNav = () => {
  return (
    <div className="flex gap-4">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
