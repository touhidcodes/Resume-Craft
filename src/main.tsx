import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </StrictMode>
);
