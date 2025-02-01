import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <h3>Welcome, {user.name}</h3>
      <button className="cursor-pointer" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
