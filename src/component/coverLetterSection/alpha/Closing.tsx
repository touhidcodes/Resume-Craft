import { useAppSelector } from "../../../redux/hooks";
import FooterEditModal from "../../Modal/coverLetter/FooterEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Closing = () => {
  const close = useAppSelector(
    (state) => state.coverLetter.coverLetter?.closing
  );
  return (
    <div className="text-sm cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group ">
      <HtmlRenderer text={close || ""} />

      <div className="hidden  group-hover:block absolute  top-[0px] right-1 duration-100 ease-in-out transition-all ">
        <FooterEditModal />
      </div>
    </div>
  );
};

export default Closing;
