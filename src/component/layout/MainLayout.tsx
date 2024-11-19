import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="h-20">Nav</div>
      <Outlet />

      <h1>footer</h1>
    </>
  );
};

export default MainLayout;
