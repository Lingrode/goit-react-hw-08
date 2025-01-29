import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className="my-6">
      <div className="container">
        <nav className="flex justify-between">
          <p>PhoneBook</p>
          <div className="flex gap-4">
            {isLoggedIn && <h3>Welcome, {user.name}</h3>}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            {isLoggedIn ? (
              <button onClick={() => dispatch(logout())}>Logout</button>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
