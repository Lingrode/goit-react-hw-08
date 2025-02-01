import { NavLink } from "react-router";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="flex gap-4">
      <NavLink
        className="relative after:absolute after:w-full after:bg-black after:h-0.5 after:opacity-0 hover:after:opacity-100 after:bottom-0 after:right-0 after:transition-opacity"
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="relative after:absolute after:w-full after:bg-black after:h-0.5 after:opacity-0 hover:after:opacity-100 after:bottom-0 after:right-0 after:transition-opacity"
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
