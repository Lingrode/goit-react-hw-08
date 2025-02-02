import { NavLink } from "react-router";

const AuthNav = () => {
  return (
    <div className="flex">
      <NavLink className="btn btn-ghost text-xl" to="/register">
        Register
      </NavLink>
      <NavLink className="btn btn-ghost text-xl" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
