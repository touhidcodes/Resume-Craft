import { useAppSelector } from "../../../redux/hooks";
import AddEducationModal from "../../Modal/AddModal/AddEducationModal";
import EducationEditModal from "../../Modal/EditModal/EducationEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Education = () => {
  const educations = useAppSelector((state) => state.resume?.resume?.Education);

  return (
    <div className="cursor-pointer mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Education
      </h1>
      <div className="w-[100%] h-0.5 bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px] space-y-2">
        {educations?.map((education, index) => (
          <div
            key={index}
            className="text-neutral-600 group hover:bg-primary/[.04] duration-100 ease-in-out transition-all leading-[17px] relative"
          >
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3 className="">{education?.degree}</h3>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3>{education.institution}</h3>
              <span className="w-0.5 h-3.5 bg-neutral-600"></span>
              <span>01/2024</span>
              <span>-</span>
              <span> 05/2024</span>
            </div>
            <HtmlRenderer text={`<p>${education.description}</p>`} />

            <div className="hidden group-hover:flex gap-x-3 items-center absolute top-1 right-1 duration-100 ease-in-out transition-all">
              <EducationEditModal education={education} />
              <AddEducationModal />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
