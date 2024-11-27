import SummaryEditModal from "../../Modal/SummaryEditModal";

const Summery = () => {
  return (
    <div className="cursor-pointer group mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">Summary</h1>
      <div className="w-full h-[2px] bg-gray-400 mb-1"></div>
      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <p>
          A summation of relevant professional abilities, accomplishments, and
          personal qualities that make you the right candidate for the job.
        </p>
      </div>
      <SummaryEditModal />
    </div>
  );
};

export default Summery;
