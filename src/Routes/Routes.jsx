import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/User/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import CollegeDetailsPage from "../Pages/User/CollegeDetailsPage/CollegeDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/college/:id",
        element: <CollegeDetailsPage></CollegeDetailsPage>,
      },
    ],
  },
]);

export default router;
