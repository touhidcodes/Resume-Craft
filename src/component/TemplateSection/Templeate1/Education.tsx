import { Edit } from "@mui/icons-material";

const Education = () => {
  return (
    <div className="font-roboto cursor-pointer  group  mb-5  border border-transparent hover:border-dashed hover:border-primary">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        {" "}
        Expricence
      </h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <div className="flex items-end gap-x-2 text-[#000] font-semibold text-[14px] leading-[24px]">
          <h3>Graduated school </h3>
          <span className="w-[2px] relative top-1 py-2  bg-[#000] mb-2 "></span>
          <h3>Location</h3>
        </div>
        <div className="flex items-end gap-x-2 text-[#000] font-semibold text-[14px] leading-[24px]">
          <h3>Frontend Developer </h3>
          <span className="w-[2px] relative top-1 py-2  bg-[#000] mb-2 "></span>
          <span>01/2024</span>
          <span>-</span>
          <span> 05/2024</span>
        </div>

        <p>
          Enter any colleges, universities, or training programs that you have
          attended.
        </p>
        <div className="hidden w-[35px] h-[35px] bg-[#FFFF] shadow-sm  group-hover:flex justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all">
          <Edit />
        </div>
      </div>
    </div>
  );
};

export default Education;
