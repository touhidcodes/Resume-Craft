import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import Login from "../pages/login/Login";
import Singup from "../pages/singup/Singup";
import About from "../pages/about/about";
import DashboardLayout from "../component/layout/DashboardLayout";
import { routerGenerator } from "../utils/routesGeneroter";
import { adminPath } from "./adminroute";
import { userPath } from "./userroute";
import ResumeBuilderLayout from "../component/layout/ResumeBuilderLayout";

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
        element: <ResumeBuilderLayout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Singup />,
  },
  {
    path: "admin",
    element: <DashboardLayout />,
    children: routerGenerator(adminPath),
  },

  {
    path: "user",
    element: <DashboardLayout />,
    children: routerGenerator(userPath),
  },
]);

export default router;
