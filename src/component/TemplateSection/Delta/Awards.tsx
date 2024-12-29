import { useAppSelector } from "../../../redux/hooks";
import HtmlRenderer from "../../shared/HtmlRenderer";
import AwardEditModal from "../../Modal/EditModal/AwardEditModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import AddAwardModal from "../../Modal/AddModal/AddAwardModal";
import { useDeleteAwardMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";

const Awards = () => {
  const awards = useAppSelector((state) => state.resume.resume?.Award);
  const [deleteAward, { isLoading }] = useDeleteAwardMutation();

  const handleDeleteAward = async (id: string) => {
    try {
      const res = await deleteAward(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };

  return (
    <div className="font-roboto cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1"> Awards</h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className="text-[13px] group-hover:bg-[#f8f9fa] cursor-pointer relative duration-100 ease-in-out transition-all space-y-2 leading-tight">
        {awards?.map((award) => (
          <div key={award.id} className="group/award break-inside-avoid">
            <h2 className="font-semibold">{award.name}</h2>
            <div className="flex flex-wrap text-[13px] justify-between">
              <p>{award.organization}</p>
              <p className="mx-1">{award.year}</p>
            </div>

            <HtmlRenderer text={award.description} />

            <div className="hidden group-hover/award:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
              <AwardEditModal award={award} />
              {awards.length > 1 && (
                <DeleteModal
                  id={award.id}
                  isLoading={isLoading}
                  handleDelete={(id) => handleDeleteAward(id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <AddAwardModal />
    </div>
  );
};

export default Awards;
