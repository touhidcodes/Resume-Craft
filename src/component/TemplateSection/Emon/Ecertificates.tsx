import AddCertificateModal from "../../Modal/AddModal/AddCertificateModal";
import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import CertificateEditModal from "../../Modal/EditModal/CertificateEditModal";
import { useDeleteCertificateMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";
import { useAppSelector } from "../../../redux/hooks";

const Ecertificates = () => {
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
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative group/container font-lato">
      <div className="flex items-end mb-3">
        <h1 className="text-[20px] leading-[25px] font-semibold mb-1">
          Certificates
        </h1>
        <div className="w-[100%] h-[0.5px] bg-[#000] "></div>
      </div>
      <div className="space-y-2 leading-tight">
        {certificates?.map((certificate) => (
          <div
            key={certificate.id}
            className="text-[#000] text-[13px] hover:bg-primary/[.04] cursor-pointer relative duration-100 ease-in-out transition-all group/certificate break-inside-avoid"
          >
            <div>
              <div className="flex gap-x-3 items-end">
                <h2 className="font-semibold text-[14px] leading-[18px]">
                  {certificate.name}
                </h2>
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  className="text-xs text-blue-500 "
                >
                  Link
                </a>
              </div>
              <div className="flex justify-between">
                <p>{certificate?.issuer}</p>
                <p className="text-xs">
                  <span>{certificate?.issueDate}</span>
                  <span>
                    {certificate?.expirationDate
                      ? ` - ${certificate.expirationDate}`
                      : ""}
                  </span>
                </p>
              </div>
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

export default Ecertificates;
