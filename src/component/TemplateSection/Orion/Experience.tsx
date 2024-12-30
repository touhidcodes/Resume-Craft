import { useAppSelector } from "../../../redux/hooks";
import ExperienceEditModal from "../../Modal/EditModal/ExperienceEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";
import AddExperienceModal from "../../Modal/AddModal/AddExperienceModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import { useDeleteExperienceMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";

const Experience = () => {
  const experiences = useAppSelector(
    (state) => state?.resume?.resume?.WorkExperience
  );
  const [deleteExperience, { isLoading }] = useDeleteExperienceMutation();

  const handleDeleteExperience = async (id: string) => {
    try {
      const res = await deleteExperience(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };

  return (
    <div className="cursor-pointer mb-5 border border-transparent hover:border-dashed hover:border-primary relative group/container font-oswald">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1 ">
        Experience
      </h1>

      <div className=" text-[#6E6E6E] text-[13px] space-y-2">
        {experiences?.map((exp) => (
          <div
            key={exp.id}
            className="break-inside-avoid text-neutral-700 group hover:bg-primary/[.04] duration-100 ease-in-out transition-all leading-[17px] relative group/experience"
          >
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3 className="">{exp.companyName}</h3>
              <span className="w-0.5 h-3.5 bg-neutral-700"></span>
              <h3>{exp.location}</h3>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3>{exp.jobTitle} </h3>
              <span className="w-0.5 h-3.5 bg-neutral-700"></span>
              <span>{exp.startDate}</span>
              <span>-</span>
              <span>{exp.endDate ? exp.endDate : "Present"}</span>
            </div>

            <HtmlRenderer text={exp.responsibilities} />

            <div className="hidden group-hover/experience:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
              <ExperienceEditModal experience={exp} />
              {experiences.length > 1 && (
                <DeleteModal
                  id={exp.id}
                  isLoading={isLoading}
                  handleDelete={(id) => handleDeleteExperience(id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <AddExperienceModal />
    </div>
  );
};

export default Experience;
