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
import TemplateTwo from "../pages/Template/Orion";

import PrivetRoute from "./PrivateRoute";
import AdminPrivet from "./AdminPrivate";

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
