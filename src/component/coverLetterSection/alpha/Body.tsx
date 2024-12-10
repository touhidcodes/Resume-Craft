import { useAppSelector } from "../../../redux/hooks";
import BodyEditModal from "../../Modal/coverLetter/BodyEditModal";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Body = () => {
  const body = useAppSelector((state) => state.coverLetter.coverLetter?.body);
  const id = useAppSelector((state) => state.coverLetter.coverLetter?.id);

  return (
    <div className="space-y-5 text-sm cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group ">
      <HtmlRenderer text={body || ""} />
      <div className="hidden group-hover:block absolute top-[-10px] right-1 duration-100 ease-in-out transition-all">
        <BodyEditModal id={id || ""} />
      </div>
    </div>
  );
};

export default Body;
