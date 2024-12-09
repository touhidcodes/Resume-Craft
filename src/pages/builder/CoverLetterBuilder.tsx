import CoverLetterBuilderNavbar from "../../component/NavBar/CoverLetterBuilderNavbar";
import Alpha from "../coverLetter/Alpha";

const CoverLetterBuilder = () => {
  return (
    <div className="max-w-[900px] min-h-svh mx-auto px-5 xl:px-0 py-10">
      <CoverLetterBuilderNavbar />
      <Alpha />
    </div>
  );
};

export default CoverLetterBuilder;
