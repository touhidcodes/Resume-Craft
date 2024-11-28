import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/HeaderEditModal";

const Header = () => {
  const personalInfo = useAppSelector(
    (state) => state.resume.resume.personalInfo
  );
  return (
    <div className="font-roboto hover:bg-[#f8f9fa] cursor-pointer relative group duration-100 ease-in-out transition-all mb-5">
      <HeaderEditModal />
      <h1 className="text-2xl font-bold">
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <h2 className="text-[20px] leading-[30px] font-medium ">
        {personalInfo.title}
      </h2>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className="flex gap-x-1  text-[#6E6E6E] text-[13px]">
        <p>{personalInfo.phone}</p>
        <div className="w-[1px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>{personalInfo.email}</p>
        <div className="w-[1px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>{personalInfo.location}</p>
      </div>
    </div>
  );
};

export default Header;
