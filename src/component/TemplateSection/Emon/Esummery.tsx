import SummaryEditModal from "../../Modal/EditModal/SummaryEditModal";
import { useAppSelector } from "../../../redux/hooks";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Esummery = () => {
  const summary = useAppSelector(
    (state) => state?.resume?.resume?.profileSummary
  );

  return (
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative font-lato">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">Summary</h1>

      <HtmlRenderer text={`${summary}`} textColor="#000" />

      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <SummaryEditModal />
      </div>
    </div>
  );
};

export default Esummery;
