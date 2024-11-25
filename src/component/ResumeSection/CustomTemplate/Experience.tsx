import ResumeEditBtn from "../../shared/ResumeEditBtn";

const Experience = () => {
  return (
    <div className="cursor-pointer group mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Experience
      </h1>
      <div className="w-[100%] h-0.5 bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <div className="flex items-end gap-x-2 text-[#000] font-semibold text-[14px] leading-[24px]">
          <h3>Emonics</h3>
          <span className="w-0.5 py-2  bg-[#000] mb-2 "></span>
          <h3>Dhaka Mirpur 12204</h3>
        </div>
        <div className="flex items-end gap-x-2 text-[#000] font-semibold text-[14px] leading-[24px]">
          <h3>Frontend Developer </h3>
          <span className="w-0.5 py-2  bg-[#000] mb-2 "></span>
          <span>01/2024</span>
          <span>-</span>
          <span> 05/2024</span>
        </div>
        <ul className="list-disc list-inside">
          <li>
            Educated patients on their conditions and prescribed medications
          </li>
          <li>
            Educated patients on their conditions and prescribed medications
          </li>
        </ul>
      </div>
      <ResumeEditBtn handleClick={() => {}} />
    </div>
  );
};

export default Experience;
