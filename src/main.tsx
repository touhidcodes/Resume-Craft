import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
);
