import { Edit } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="group   border border-transparent hover:border-dashed hover:border-primary relative cursor-pointer">
      <h1 className="text-[#6E6E6E] text-[13px] leading-[19px] font-ubuntu mb-1">
        Sincerely,
      </h1>

      <p className="text-[13px] leading-[19px] text-[#6E6E6E]"> [Your Name]</p>
      <div className="hidden w-[50px] h-[50px] bg-[#FFFF] shadow-sm  group-hover:flex justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all">
        <Edit />
      </div>
    </div>
  );
};

export default Footer;
