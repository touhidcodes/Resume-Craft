import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/EditModal/HeaderEditModal";

const Header = () => {
  const personalInfo = useAppSelector(
    (state) => state?.resume?.resume?.personalInfo
  );

  return (
    <div className="font-roboto hover:bg-primary/[.04] cursor-pointer relative group duration-100 ease-in-out transition-all mb-5">
      <h1 className="text-2xl font-bold">{personalInfo?.fullName}</h1>
      <h2 className="text-[20px] leading-[30px] font-medium ">
        {personalInfo?.jobTitle}
      </h2>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className="flex gap-x-1  text-[#6E6E6E] text-[13px]">
        <p>{personalInfo?.phone}</p>
        <div className="w-[1px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>{personalInfo?.email}</p>
        <div className="w-[1px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>{personalInfo?.location}</p>
      </div>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HeaderEditModal personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Header;
