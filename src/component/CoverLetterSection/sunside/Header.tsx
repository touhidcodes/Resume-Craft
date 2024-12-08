import { Edit } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="group  mb-5  border border-transparent hover:border-dashed hover:border-primary relative cursor-pointer">
      <h1 className="text-[#6E6E6E] text-[13px] leading-[19px] font-ubuntu mb-1">
        First Name Last Name
      </h1>
      <p className="text-[13px] leading-[19px] text-[#6E6E6E] mb-1">
        example@resume.com
      </p>
      <p className="text-[13px] leading-[19px] text-[#6E6E6E]">Number</p>
      <div className="hidden w-[50px] h-[50px] bg-[#FFFF] shadow-sm  group-hover:flex justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all">
        <Edit />
      </div>
    </div>
  );
};

export default Header;
