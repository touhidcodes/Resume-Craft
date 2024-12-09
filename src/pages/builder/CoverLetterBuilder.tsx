import { useLocation } from "react-router-dom";
import CoverLetterBuilderNavbar from "../../component/NavBar/CoverLetterBuilderNavbar";
import { useGetCoverLetterQuery } from "../../redux/features/coverLetter/coverLetterApi";
import CoverLetterTemplateRoutes from "../../routes/CoverLetterTemplateRoutes";

const CoverLetterBuilder = () => {
  const location = useLocation();
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
      <CoverLetterBuilderNavbar />
      <CoverLetterTemplateRoutes />
    </div>
  );
};

export default CoverLetterBuilder;
