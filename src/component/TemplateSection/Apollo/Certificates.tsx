import { useAppSelector } from "../../../redux/hooks";
import CertificateEditModal from "../../Modal/EditModal/CertificateEditModal";

const Certificates = () => {
  const certificates = useAppSelector(
    (state) => state.resume.resume?.Certification
  );

  return (
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Certificates
      </h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      {certificates?.map((certificate) => (
        <div
          key={certificate.id}
          className="text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative duration-100 ease-in-out transition-all"
        >
          <div className="flex gap-x-3 items-end">
            <h2 className="font-semibold">{certificate.name}</h2>
            <a
              href={certificate.certificateLink}
              target="_blank"
              className="text-xs text-blue-500 underline"
            >
              Link
            </a>
          </div>
          <p>{certificate?.issuer}</p>
          <p className="text-xs">
            <span>{certificate.issueDate}</span>
            <span>
              {certificate?.expirationDate
                ? ` - ${certificate.expirationDate}`
                : ""}
            </span>
          </p>
          <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
            <CertificateEditModal />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
