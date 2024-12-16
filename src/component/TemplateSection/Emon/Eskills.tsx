import { toast } from "sonner";
import AddSkillModal from "../../Modal/AddModal/AddSkillModal";
import SkillEditModal from "../../Modal/EditModal/SkillEditModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import { useDeleteSkillMutation } from "../../../redux/features/resume/resumeApi";
import { useAppSelector } from "../../../redux/hooks";

const Eskills = () => {
  const skills = useAppSelector((state) => state?.resume?.resume?.Skill);
  const [deleteSkill, { isLoading }] = useDeleteSkillMutation();

  const handleDeleteSkill = async (id: string) => {
    try {
      const res = await deleteSkill(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative group/container font-lato mb-5">
      <div className="flex items-end mb-3">
        <h1 className="text-[20px] leading-[25px] font-semibold mb-1">
          Skills
        </h1>
        <div className="w-[100%] h-[0.5px] bg-[#000] "></div>
      </div>
      {skills?.map((skill) => (
        <div
          key={skill.id}
          className="text-[#6E6E6E] text-[13px] py-0.5 hover:bg-primary/[.05] cursor-pointer relative duration-100 ease-in-out transition-all group break-inside-avoid"
        >
          <p>
            <span className="font-semibold mr-3 text-[#000]">
              {skill.category}:
            </span>
            {skill.skills.join(", ")}
          </p>
          <div className="hidden group-hover:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
            <SkillEditModal skill={skill} />
            {skills.length > 1 && (
              <DeleteModal
                id={skill.id}
                isLoading={isLoading}
                handleDelete={(id) => handleDeleteSkill(id)}
              />
            )}
          </div>
        </div>
      ))}
      <AddSkillModal />
    </div>
  );
};

export default Eskills;
