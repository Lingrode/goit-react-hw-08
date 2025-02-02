import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center gap-4">
      <h3 className="text-2xl font-semibold">Welcome, {user.name}</h3>
      <button
        className="btn btn-ghost text-xl"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
