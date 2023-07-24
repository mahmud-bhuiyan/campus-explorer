import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/User/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import CollegeDetailsPage from "../Pages/User/CollegeDetailsPage/CollegeDetailsPage";
import CollegesPage from "../Pages/User/CollegesPage/CollegesPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/User/Profile/Profile";
import UpdateProfile from "../Pages/User/Profile/UpdateProfile";

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
        path: "/colleges",
        element: <CollegesPage></CollegesPage>,
      },
      {
        path: "/college/:id",
        element: (
          <PrivateRoute>
            <CollegeDetailsPage></CollegeDetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/:email",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
