import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "./index.css";
import AuthProvider from "./providor/authProvidor.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
