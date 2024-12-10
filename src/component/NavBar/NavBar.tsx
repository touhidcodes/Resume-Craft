import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, userCurrentUser } from "../../redux/features/auth/authSlice";
import { Button } from "@mui/material";
import logo from "../../assets/Logo.png";
import { toast } from "sonner";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useAppSelector(userCurrentUser);
  const dispatch = useAppDispatch();
  let role = user?.role;
  console.log(role)
  
  const handleLogout = () => {
    toast.success("Logout successful", {
      duration: 2000,
    });
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`z-50 sticky top-0  w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-300 bg-white"
          : "border-none bg-[#F7F9FC]"
      }`}
    >
      <div className="max-w-[1170px] flex items-center justify-between mx-auto px-2">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">
          <Link to="/">
            <div className="flex items-center justify-center gap-x-2">
              <img
                src={logo}
                alt="logo"
                className="md:cursor-pointer size-8 bg-cover object-contain"
              />
              <h1 className="text-2xl font-medium md:hidden lg:block lowercase">
                Resume Craft
              </h1>
            </div>
          </Link>
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <Close /> : <MenuIcon />}
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <ul className="md:flex hidden  items-center gap-4 lg:gap-5">
            <li className="group relative ">
              <p className="py-2 px-3 rounded-[9px] inline-block hover:bg-[#efefef] transition-all ease-in-out duration-100 cursor-pointer">
                Resume <KeyboardArrowDown />
              </p>
              <div className=" invisible hover:visible group-hover:visible top-12 duration-300 ease-in-out transition-all py-2 absolute  w-[380px] shadow-lg  px-2 opacity-0 group-hover:opacity-100 bg-white rounded-[10px]">
                <p className="py-3 px-2  rounded-[9px] hover:bg-[#EFEFEF]">
                  <Link
                    to="/Resume Create"
                    className="  text-black  rounded text-[18px] leaidng-[30px] font-semibold flex flex-col"
                  >
                    Resume builder
                    <small className="text-gray-500 font-normal">
                      Create and format resumes with Ai editor
                    </small>
                  </Link>
                </p>
                <p className="py-3 px-2  rounded-[9px] hover:bg-[#EFEFEF]">
                  <Link
                    to="/Resume Create"
                    className="text-black  rounded text-[18px] leaidng-[30px] font-semibold flex flex-col "
                  >
                    Resume samples
                    <small className="text-gray-500 font-normal">
                      Build job tailored resumes with samples
                    </small>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <Link
                to="/about"
                className="py-2 px-5 rounded-[9px] inline-block hover:bg-[#efefef] transition-all ease-in-out duration-100 cursor-pointer"
              >
                About us
              </Link>
            </li>
            {user ? (
              <li>
                <Link
                  className="py-2 px-5 rounded-[9px] inline-block hover:bg-[#efefef] transition-all ease-in-out duration-100 cursor-pointer"
                  to={`/${role}/dashboard`}
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}

            {/* <NavLinks /> */}
          </ul>
          <div className="w-[1px] h-6 bg-[#EEEEEE]"></div>
          <div className="md:flex gap-x-2 hidden ">
            {user ? (
              <Button variant="contained" onClick={handleLogout} size="large">
                Logout
              </Button>
            ) : (
              <Button variant="contained" size="large">
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-white fixed  z-[99] w-[300px] top-0 overflow-y-auto bottom-0 pt-5 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%] "}
      `}
        >
          <img
            src="https://i.ibb.co.com/Z1FrPZh/Logo-4x.png"
            alt="logo"
            className="md:cursor-pointer h-9"
          />
          <li>
            <Link to="/" className="pt-6 pb-3 px-3 inline-block">
              Resume Create
            </Link>
          </li>

          <li>
            {" "}
            <Link to="/about" className="py-3 px-3 inline-block">
              About us
            </Link>
          </li>
          <li></li>
          {/* <NavLinks /> */}
          <div className="py-3"></div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
