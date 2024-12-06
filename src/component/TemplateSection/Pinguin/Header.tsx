import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/EditModal/HeaderEditModal";

const Header = () => {
  const personalInfo = useAppSelector(
    (state) => state?.resume?.resume?.personalInfo
  );

  return (
    <>
      <div className="bg-white border-r p-6 font-roboto hover:bg-primary/[.04] cursor-pointer relative group duration-100 ease-in-out transition-all">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">{personalInfo?.fullName}</h1>
          <p className="text-gray-700"> {personalInfo?.jobTitle}</p>
          <div className="mt-2 flex flex-wrap flex-col  justify-center">
            <p className="text-[14px] text-gray-400">{personalInfo?.email}</p>
            <p className="text-[14px] text-gray-400">{personalInfo?.phone}</p>
            <p className="text-[14px] text-gray-400">
              {personalInfo?.location}
            </p>
          </div>
        </div>
        <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
          <HeaderEditModal personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
};

export default Header;
