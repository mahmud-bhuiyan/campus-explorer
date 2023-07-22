import { Outlet } from "react-router-dom";
import Navbar from "../Pages/User/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
