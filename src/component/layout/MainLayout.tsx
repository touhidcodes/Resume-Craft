import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
