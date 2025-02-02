import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="py-6 mb-10 bg-base-300 text-accent border-b-accent border-b-2">
      <div className="container">
        <nav className="flex justify-between">
          <Navigation />
          <div className="flex gap-4">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
