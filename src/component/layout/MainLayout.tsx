import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <div className=" mb-[40px] md:mb-[80px]">
        {" "}
        <NavBar></NavBar>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
