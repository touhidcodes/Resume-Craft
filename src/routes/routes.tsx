import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
