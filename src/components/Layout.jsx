import { Outlet } from "react-router";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
