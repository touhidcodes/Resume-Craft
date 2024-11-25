import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

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
  palette: {
    primary: {
      main: "#1222FE",
    },
    secondary: {
      main: "#000000",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <Toaster />
        </PersistGate>
      </Provider>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
);
