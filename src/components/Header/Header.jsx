import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="my-6">
      <div className="container">
        <nav className="flex justify-between">
          <p>PhoneBook</p>
          <div className="flex gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
