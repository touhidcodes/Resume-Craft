import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import Login from "../pages/login/Login";
import Singup from "../pages/singup/Singup";
import About from "../pages/about/about";
import DashboardLayout from "../component/layout/DashboardLayout";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
