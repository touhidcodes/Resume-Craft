import HtmlRenderer from "../../shared/HtmlRenderer";
import SummaryEditModal from "../../Modal/EditModal/SummaryEditModal";
import { useAppSelector } from "../../../redux/hooks";

const Summery = () => {
  const summary = useAppSelector(
    (state) => state?.resume?.resume?.profileSummary
  );

  return (
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1 ">
        About Me
      </h1>

      <HtmlRenderer text={`<p>${summary}</p>`} />

      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <SummaryEditModal />
      </div>
    </div>
  );
};

export default Summery;
