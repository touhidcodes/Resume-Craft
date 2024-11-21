import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log(window.screenX);
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
      className={`border-b sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-300 backdrop-blur"
          : "border-none bg-white"
      }`}
    >
      <div className="max-w-container px-5 xl:px-0 flex items-center justify-between mx-auto">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">
          <img
            src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/N8lApmzhKXbK5HA7kTpU1702703250.svg"
            alt="logo"
            className="md:cursor-pointer h-9"
          />
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
              <p className="py-2 px-5 rounded-[9px] inline-block hover:bg-[#efefef] transition-all ease-in-out duration-100 cursor-pointer">
                Resume <KeyboardArrowDown />
              </p>
              <div className=" invisible hover:visible group-hover:visible top-12 duration-300 ease-in-out transition-all py-2 absolute  w-[380px] shadow-lg  px-2 opacity-0 group-hover:opacity-100 bg-white rounded-[10px]">
                <p className="py-3 px-2  rounded-[9px] hover:bg-[#EFEFEF]">
                  <Link
                    to="/Resume Create"
                    className="block  text-black  rounded text-[18px] leaidng-[30px] font-semibold"
                  >
                    Resume builder
                  </Link>
                  <small className="text-gray-500">
                    Create and format resumes with Ai editor
                  </small>
                </p>
                <p className="py-3 px-2  rounded-[9px] hover:bg-[#EFEFEF]">
                  <Link
                    to="/Resume Create"
                    className="block  text-black  rounded text-[18px] leaidng-[30px] font-semibold"
                  >
                    Resume samples
                  </Link>
                  <small className="text-gray-500">
                    Build job tailored resumes with samples
                  </small>
                </p>
              </div>
            </li>
            <li>
              <Link to="/AboutUs" className="py-7 px-3 inline-block">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contac" className="py-7 px-3 inline-block">
                Contact
              </Link>
            </li>

            {/* <NavLinks /> */}
          </ul>
          <div className="w-[1px] h-6 bg-[#EEEEEE]"></div>
          <div className="md:flex gap-x-2 hidden ">
            <Link to="/login">
              <button className=" border-[#6644D3] text-[#6644D3] hover:bg-[#6644D3] hover:text-white  px-6 w-36  py-2 border rounded-[9px] font-semibold">
                LOG IN{" "}
              </button>
            </Link>
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
            src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/N8lApmzhKXbK5HA7kTpU1702703250.svg"
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
            <Link to="/contac" className="py-3 px-3 inline-block">
              Contact Us
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/AboutUs" className="py-3 px-3 inline-block">
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
