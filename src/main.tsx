import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
=======

>>>>>>> dev
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </StrictMode>
);
