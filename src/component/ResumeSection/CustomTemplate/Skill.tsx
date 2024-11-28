import { useAppSelector } from "../../../redux/hooks";
import SkillEditModal from "../../Modal/SkillEditModal";

const Skill = () => {
  const skills = useAppSelector((state) => state.resume.resume.skills);

  return (
    <div className="cursor-pointer mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1"> Skills</h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all group"
        >
          <p>
            <span className="font-semibold mr-3 text-neutral-700">
              {skill.category}:
            </span>
            {skill.skill.join(", ")}
          </p>
          <SkillEditModal />
        </div>
      ))}
    </div>
  );
};

export default Skill;
