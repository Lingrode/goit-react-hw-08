import { NavLink } from "react-router";

const AuthNav = () => {
  return (
    <div className="flex gap-4">
      <NavLink
        className="relative after:absolute after:w-full after:bg-black after:h-0.5 after:opacity-0 hover:after:opacity-100 after:bottom-0 after:right-0 after:transition-opacity"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="relative after:absolute after:w-full after:bg-black after:h-0.5 after:opacity-0 hover:after:opacity-100 after:bottom-0 after:right-0 after:transition-opacity"
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
