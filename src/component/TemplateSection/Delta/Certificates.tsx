import { toast } from "sonner";
import { useDeleteCertificateMutation } from "../../../redux/features/resume/resumeApi";
import { useAppSelector } from "../../../redux/hooks";
import AddCertificateModal from "../../Modal/AddModal/AddCertificateModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import CertificateEditModal from "../../Modal/EditModal/CertificateEditModal";

const Certificates = () => {
  const certificates = useAppSelector(
    (state) => state.resume.resume?.Certification
  );
  const [deleteCertificate, { isLoading }] = useDeleteCertificateMutation();

  const handleDeleteCertificate = async (id: string) => {
    try {
      const res = await deleteCertificate(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };

  return (
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Certificates
      </h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className="space-y-2 leading-tight">
        {certificates?.map((certificate) => (
          <div
            key={certificate.id}
            className="text-[13px] hover:bg-primary/[.04] cursor-pointer relative duration-100 ease-in-out transition-all group/certificate break-inside-avoid"
          >
            <div className="flex gap-x-3 items-end">
              <h2 className="font-bold">{certificate.name}</h2>
            </div>
            <div className="flex flex-wrap text-[13px] justify-between">
              <p className="font-semibold">{certificate?.issuer}</p>
              <div className="w-[2px] h-[15px] bg-[#6E6E6E] mb-2"></div>
              <a
                href={certificate.certificateLink}
                target="_blank"
                className="text-[#275ab1] font-medium"
              >
                Certificate Link
              </a>
              <div className="w-[2px] h-[15px] bg-[#6E6E6E] mb-2"></div>
              <p className="text-xs mx-1 font-medium">
                <span>{certificate?.issueDate}</span>
                <span>
                  {certificate?.expirationDate
                    ? ` - ${certificate.expirationDate}`
                    : ""}
                </span>
              </p>
            </div>

            <div className="hidden group-hover/certificate:flex items-center absolute top-1 right-1 duration-100 ease-in-out transition-all custom-shadow rounded-md p-[1px] bg-white">
              <CertificateEditModal certificate={certificate} />
              {certificates.length > 1 && (
                <DeleteModal
                  id={certificate.id}
                  isLoading={isLoading}
                  handleDelete={(id) => handleDeleteCertificate(id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <AddCertificateModal />
    </div>
  );
};

export default Certificates;
