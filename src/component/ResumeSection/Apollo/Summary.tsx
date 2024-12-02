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
      <div className="w-full h-[2px] bg-gray-400 mb-1"></div>
      <HtmlRenderer text={`<p>${summary}</p>`} />

      <SummaryEditModal />
    </div>
  );
};

export default Summary;
