const Certificates = () => {
  return (
    <div className="font-roboto cursor-pointer  group  mb-5  border border-transparent hover:border-dashed hover:border-primary">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        {" "}
        Certificates
      </h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <p>Show your certificates, licenses, and training in your field.</p>

        <div className="hidden w-[35px] h-[35px] bg-[#FFFF] shadow-sm  group-hover:flex justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>
      </div>
    </div>
  );
};

export default Certificates;
