import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />

      <h1>footer</h1>
    </>
  );
};

export default MainLayout;
