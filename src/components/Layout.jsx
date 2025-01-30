import { Outlet } from "react-router";
import AppBar from "./AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
