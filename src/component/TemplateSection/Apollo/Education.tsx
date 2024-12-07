import { toast } from "sonner";
import { useAppSelector } from "../../../redux/hooks";
import AddEducationModal from "../../Modal/AddModal/AddEducationModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import EducationEditModal from "../../Modal/EditModal/EducationEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";
import { useDeleteEducationMutation } from "../../../redux/features/resume/resumeApi";

const Education = () => {
  const educations = useAppSelector((state) => state.resume?.resume?.Education);
  const [deleteEducation, { isLoading }] = useDeleteEducationMutation();

  const handleDeleteEducation = async (id: string) => {
    try {
      const res = await deleteEducation(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };

  return (
    <div className="cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Education
      </h1>
      <div className="w-[100%] h-0.5 bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px] space-y-2">
        {educations?.map((education, index) => (
          <div
            key={index}
            className="break-inside-avoid text-neutral-600 group hover:bg-primary/[.04] duration-100 ease-in-out transition-all leading-[17px] relative group/education"
          >
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3 className="">{education?.degree}</h3>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3>{education.institution}</h3>
              <span className="w-0.5 h-3.5 bg-neutral-600"></span>
              <span>{education.startDate}</span>
              <span>-</span>
              <span> {education.endDate ? education.endDate : "Present"}</span>
            </div>
            <HtmlRenderer text={education.description} />
            <div className="hidden group-hover/education:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
              <EducationEditModal education={education} />
              <DeleteModal
                id={education.id}
                isLoading={isLoading}
                handleDelete={(id) => handleDeleteEducation(id)}
              />
            </div>
          </div>
        ))}
      </div>
      <AddEducationModal />
    </div>
  );
};

export default Education;
