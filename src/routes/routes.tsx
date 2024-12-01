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

import ResumeBuilder from "../pages/builder/ResumeBuilder";

import NotFound from "../pages/notFound/NotFound";
import ResumeBuilderLayout from "../component/layout/ResumeBuilderLayout";
import TemplateTwo from "../pages/Resume/TemplateTwo/TemplateTwo";
import ReusmeLoading from "../component/shared/ReusmeLoading";

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
        element: <ResumeBuilder />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/resume",
    element: <TemplateTwo></TemplateTwo>,
  },
  {
    path: "/loading",
    element: <ReusmeLoading></ReusmeLoading>,
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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
