import { createTheme, ThemeProvider } from "@mui/material";
import MainLayout from "./component/layout/MainLayout";

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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
      <MainLayout />
    </>
  );
}

export default App;
