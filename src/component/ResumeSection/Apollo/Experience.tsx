import { useAppSelector } from "../../../redux/hooks";
import ExperienceEditModal from "../../Modal/ExperienceEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Experience = () => {
  const experiences = useAppSelector(
    (state) => state?.resume?.resume?.WorkExperience
  );

  return (
    <div className="cursor-pointer mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Experience
      </h1>
      <div className="w-[100%] h-0.5 bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px] space-y-3.5">
        {experiences?.map((exp) => (
          <div
            key={exp.id}
            className="text-neutral-700 group hover:bg-primary/[.04] duration-100 ease-in-out transition-all leading-[17px] relative"
          >
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3 className="">{exp.companyName}</h3>
              <span className="w-0.5 h-3.5 bg-neutral-700"></span>
              <h3>{exp.location}</h3>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3>{exp.jobTitle} </h3>
              <span className="w-0.5 h-3.5 bg-neutral-700"></span>
              <span>01/2024</span>
              <span>-</span>
              <span> 05/2024</span>
            </div>

            <HtmlRenderer text={exp.responsibilities} />

            <ExperienceEditModal />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
