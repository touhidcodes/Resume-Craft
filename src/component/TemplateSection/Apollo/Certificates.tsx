import CertificateEditModal from "../../Modal/EditModal/CertificateEditModal";

const Certificates = () => {
  return (
    <div className="cursor-pointer  group  mb-5  border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Certificates
      </h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <p>Show your certificates, licenses, and training in your field.</p>
      </div>

      <CertificateEditModal />
    </div>
  );
};

export default Certificates;
