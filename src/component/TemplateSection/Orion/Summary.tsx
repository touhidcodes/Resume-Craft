import { useAppSelector } from "../../../redux/hooks";
import SummaryEditModal from "../../Modal/EditModal/SummaryEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Summary = () => {
  const summary = useAppSelector(
    (state) => state?.resume?.resume?.profileSummary
  );

  return (
    <div className="cursor-pointer group mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">Summary</h1>

      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <HtmlRenderer text={`${summary}`} />
      </div>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <SummaryEditModal />
      </div>
    </div>
  );
};

export default Summary;
