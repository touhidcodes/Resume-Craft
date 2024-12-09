import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import Login from "../pages/login/Login";
import Singup from "../pages/singup/Singup";
import About from "../pages/about/about";
import DashboardLayout from "../component/layout/DashboardLayout";
import { routerGenerator } from "../utils/routesGenerator";
import ResumeBuilder from "../pages/builder/ResumeBuilder";
import NotFound from "../pages/notFound/NotFound";
import PrivetRoute from "./PrivateRoute";
import AdminPrivet from "./AdminPrivate";
import CoverLetterBuilder from "../pages/builder/CoverLetterBuilder";
import { AdminPath } from "./AdminRoute";
import { UserPath } from "./UserRoute";

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
        path: "/cover-letter-builder/*",
        element: <CoverLetterBuilder />,
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
    element: (
      <AdminPrivet>
        <DashboardLayout />
      </AdminPrivet>
    ),
    children: routerGenerator(AdminPath),
  },

  {
    path: "user",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: routerGenerator(UserPath),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
/// solve rakib bhai error
