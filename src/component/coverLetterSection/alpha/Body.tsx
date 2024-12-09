import { useAppSelector } from "../../../redux/hooks";
import HtmlRenderer from "../../shared/HtmlRenderer";

const Body = () => {
  const body = useAppSelector((state) => state.coverLetter.coverLetter?.body);

  return (
    <div className="space-y-5 text-sm cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <HtmlRenderer text={`${body}`} />
    </div>
  );
};

export default Body;
