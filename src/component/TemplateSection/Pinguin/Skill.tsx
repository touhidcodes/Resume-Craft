import { useAppSelector } from "../../../redux/hooks";
import AddSkillModal from "../../Modal/AddModal/AddSkillModal";
import SkillEditModal from "../../Modal/EditModal/SkillEditModal";

const Skill = () => {
  const skills = useAppSelector((state) => state?.resume?.resume?.Skill);

  return (
    <div>
      <div className="flex flex-col p-6 py-3 cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative">
        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
          Skills
        </span>
        <ul>
          <li className="mb-2">JavaScript</li>
          <li className="mb-2">React</li>
          <li className="mb-2">Node.js</li>
          <li className="mb-2">HTML/CSS</li>
          <li className="mb-2">Tailwind Css</li>
        </ul>

        <div className="hidden group-hover:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
          {/* <SkillEditModal skill={skill} /> */}
          <AddSkillModal />
        </div>
      </div>
    </div>
  );
};

export default Skill;
