import { Edit } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="font-roboto hover:bg-[#f8f9fa] cursor-pointer relative group duration-100 ease-in-out transition-all mb-5">
      <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm  group-hover:flex justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all">
        <Edit />
      </div>

      <h1 className="text-[20px] leading-[30px] font-semibold ">
        {" "}
        Anonymous Dog
      </h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className="flex gap-x-1  text-[#6E6E6E] text-[13px]">
        <p>Phone number</p>
        <div className="w-[1px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>Email@example.com</p>
        <div className="w-[1px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p> City, State</p>
      </div>
    </div>
  );
};

export default Header;
