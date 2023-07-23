import { Outlet } from "react-router-dom";
import Navbar from "../Pages/User/Shared/Navbar/Navbar";
import Footer from "../Pages/User/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
