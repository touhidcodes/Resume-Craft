import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="h-20">Nav</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
