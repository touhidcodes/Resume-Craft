import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/EditModal/HeaderEditModal";

const EHeader = () => {
  const personalInfo = useAppSelector(
    (state) => state?.resume?.resume?.personalInfo
  );

  return (
    <div className=" hover:bg-primary/[.04] cursor-pointer relative group duration-100 ease-in-out transition-all font-lato mb-5">
      <h1 className="text-[20px] leading-[25px] font-bold">
        {personalInfo?.fullName}
      </h1>
      <h2 className="text-[16px] leading-[20px] font-medium ">
        {personalInfo?.jobTitle}
      </h2>

      <div className="flex  text-[#000] text-[12px] leading-[16px] flex-col">
        <p>{personalInfo?.location} </p>
        <p>{personalInfo?.phone}</p>
        <p>{personalInfo?.email}</p>

        <div className="text-[#769DE1] mb-4">
          <a href="http://emon.com">Linkedin</a>
          <a href="http://">|GitHub|</a>
          <a href="http://">Portfolio</a>
        </div>
        <div className="w-full h-[0.5px] bg-[#000]"></div>
      </div>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HeaderEditModal personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default EHeader;
