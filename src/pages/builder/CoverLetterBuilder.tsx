import { useLocation } from "react-router-dom";
import CoverLetterBuilderNavbar from "../../component/NavBar/CoverLetterBuilderNavbar";
import { useGetCoverLetterQuery } from "../../redux/features/coverLetter/coverLetterApi";
import CoverLetterTemplateRoutes from "../../routes/CoverLetterTemplateRoutes";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const CoverLetterBuilder = () => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const queryParams = new URLSearchParams(location.search);
  // Access query parameters by name
  const coverLetterId = queryParams.get("cl");

  const { data, isLoading } = useGetCoverLetterQuery(coverLetterId);

  if (isLoading) return;

  return (
    <div className="max-w-[900px] min-h-svh mx-auto px-5 xl:px-0 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {data?.data?.name}
      </h1>
      <CoverLetterBuilderNavbar reactToPrintFn={reactToPrintFn} />
      <div ref={contentRef}>
        <CoverLetterTemplateRoutes />
      </div>
    </div>
  );
};

export default CoverLetterBuilder;
