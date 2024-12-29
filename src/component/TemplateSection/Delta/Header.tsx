import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/EditModal/HeaderEditModal";

const Header = () => {
  const personalInfo = useAppSelector(
    (state) => state?.resume?.resume?.personalInfo
  );

  return (
    <div className="font-roboto hover:bg-primary/[.04] cursor-pointer relative group duration-100 ease-in-out transition-all">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{personalInfo?.fullName}</h1>
        <h2 className="text-[20px] leading-[30px] font-medium ">
          {personalInfo?.jobTitle}
        </h2>
      </div>

      <div className="flex flex-wrap gap-x-4  text-[13px] justify-center">
        <p>
          <span className="font-bold">Email: </span>
          {personalInfo?.email}
        </p>
        <div className="w-[2px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>
          <span className="font-bold">Phone: </span>
          {personalInfo?.phone}
        </p>
        <div className="w-[2px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <p>
          <span className="font-bold">Location: </span>
          {personalInfo?.location}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-4  text-[13px] justify-center">
        <a
          href={personalInfo?.linkedin}
          target="_blank"
          className="text-[#275ab1] font-bold"
        >
          Linkedin
        </a>
        <div className="w-[2px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <a
          href={personalInfo?.github}
          target="_blank"
          className="text-[#275ab1] font-bold"
        >
          GetHub
        </a>
        <div className="w-[2px] h-[15px] bg-[#6E6E6E] mb-2"></div>
        <a
          href={personalInfo?.website}
          target="_blank"
          className="text-[#275ab1] font-bold"
        >
          Portfolio Website
        </a>
      </div>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HeaderEditModal personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Header;
