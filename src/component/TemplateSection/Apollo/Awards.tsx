import { useAppSelector } from "../../../redux/hooks";
import HtmlRenderer from "../../shared/HtmlRenderer";
import AwardEditModal from "../../Modal/EditModal/AwardEditModal";

const Awards = () => {
  const awards = useAppSelector((state) => state.resume.resume?.Award);

  return (
    <div className="font-roboto cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1"> Awards</h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px] group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        {awards?.map((award) => (
          <div key={award.id} className="group/award break-inside-avoid">
            <h2 className="font-semibold">{award.name}</h2>
            <p>{award.organization}</p>
            <p className="text-xs">{award.year}</p>
            <HtmlRenderer text={award.description} />

            <div className="hidden group-hover/award:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
              <AwardEditModal award={award} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
