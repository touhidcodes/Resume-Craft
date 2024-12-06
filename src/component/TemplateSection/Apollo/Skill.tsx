import { useAppSelector } from "../../../redux/hooks";
import AddSkillModal from "../../Modal/AddModal/AddSkillModal";
import SkillEditModal from "../../Modal/EditModal/SkillEditModal";

const Skill = () => {
  const skills = useAppSelector((state) => state?.resume?.resume?.Skill);

  return (
    <div className="cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1"> Skills</h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      {skills?.map((skill) => (
        <div
          key={skill.id}
          className="text-[#6E6E6E] text-[13px] py-0.5 hover:bg-primary/[.05] cursor-pointer relative duration-100 ease-in-out transition-all group break-inside-avoid"
        >
          <p>
            <span className="font-semibold mr-3 text-neutral-700">
              {skill.category}:
            </span>
            {skill.skills.join(", ")}
          </p>
          <div className="hidden group-hover:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
            <SkillEditModal skill={skill} />
            <AddSkillModal />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
