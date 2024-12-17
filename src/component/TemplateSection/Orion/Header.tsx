import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/EditModal/HeaderEditModal";

const Header = () => {
  const personalInfo = useAppSelector(
    (state) => state?.resume?.resume?.personalInfo
  );
  return (
    <div className="font-oswald hover:bg-[#f8f9fa] cursor-pointer relative group duration-100 ease-in-out transition-all mb-5">
      <h1 className="text-[20px] leading-[30px] font-semibold ">
        {personalInfo?.fullName}
      </h1>

      <div className="flex gap-x-1  flex-col text-[#6E6E6E] text-[13px]">
        <p>{personalInfo?.phone}</p>
        <p>{personalInfo?.email}</p>
        <p>{personalInfo?.location}</p>
      </div>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HeaderEditModal personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Header;
