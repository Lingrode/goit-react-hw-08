import { NavLink } from "react-router";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="flex text-accent ">
      <NavLink className="btn btn-ghost text-xl" to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className="btn btn-ghost text-xl" to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
