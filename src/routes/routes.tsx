import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import Login from "../pages/login/Login";
import Singup from "../pages/singup/Singup";
import About from "../pages/about/about";
import DashboardLayout from "../component/layout/DashboardLayout";
import { routerGenerator } from "../utils/routesGeneroter";
import { adminPath } from "./AdminRoute";
import { userPath } from "./UserRoute";

import ResumeBuilder from "../pages/builder/ResumeBuilder";

import NotFound from "../pages/notFound/NotFound";
import Orion from "../pages/Template/Orion";

import PrivetRoute from "./PrivateRoute";
import AdminPrivet from "./AdminPrivate";
import Pinguin from "../pages/Template/Pinguin";
import SunsideCover from "../pages/CoverLetter/SunsideCover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume-builder/*",
        element: (
          <PrivetRoute>
            <ResumeBuilder />
          </PrivetRoute>
        ),
      },
      {
        path: "/resume",
        element: <Orion />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/resumeb",
    element: <SunsideCover></SunsideCover>,
  },

  {
    path: "/register",
    element: <Singup />,
  },
  {
    path: "admin",
    element: (
      <AdminPrivet>
        <DashboardLayout />
      </AdminPrivet>
    ),
    children: routerGenerator(adminPath),
  },

  {
    path: "user",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: routerGenerator(userPath),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
/// solve rakib bhai error
