import { useAppSelector } from "../../../redux/hooks";
import { toast } from "sonner";
import { useDeleteExperienceMutation } from "../../../redux/features/resume/resumeApi";
import ExperienceEditModal from "../../Modal/EditModal/ExperienceEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";
import AddExperienceModal from "../../Modal/AddModal/AddExperienceModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";

const EExperience = () => {
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
    <div className="cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative group/container font-lato">
      <div className="flex items-end mb-3">
        <h1 className="text-[20px] leading-[25px] font-semibold mb-1">
          Experience
        </h1>
        <div className="w-[100%] h-[0.5px] bg-[#000] "></div>
      </div>

      <div className=" text-[#000] text-[13px] space-y-3.5">
        {experiences?.map((exp) => (
          <div
            key={exp.id}
            className="break-inside-avoid text-[#000] group hover:bg-primary/[.04] duration-100 ease-in-out transition-all leading-[17px] relative group/experience"
          >
            <div className="flex items-center  justify-between  gap-x-2 font-medium text-[14px] mb-2">
              <div>
                <h3 className="text-[14px] leading-[20px] font-semibold text-[#000] mb-1">
                  {exp.jobTitle}
                  <span className="text-[12px] leading-[12px] text-gray-500">
                    (Intern ){" "}
                  </span>
                </h3>

                <h3 className="text-[14px] leading-[20px] font-semibold text-[#000]">
                  <span className="text-[#769DE1] ">{exp.companyName},</span>{" "}
                  {exp.location}{" "}
                  <span className="text-[12px] leading-[12px] text-gray-500">
                    (Remote){" "}
                  </span>
                </h3>
              </div>
              <div className="flex gap-x-2 text-[12px] leading-[14px] text-[#000]">
                <span> {exp.startDate}</span>
                <span>-</span>
                <span>{exp.endDate ? exp.endDate : "Present"}</span>
              </div>
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

export default EExperience;
