import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className=" mb-[40px] md:mb-[80px]">
        <NavBar></NavBar>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
