import { useLocation } from "react-router-dom";
import ResumeBuilderNavbar from "../../component/NavBar/ResumeBuilderNavbar";
import ResumeBuilderSidebar from "../../component/layout/ResumeBuilderSidebar";
import { useGetResumeDataQuery } from "../../redux/features/resume/resumeApi";
import TemplateRoutes from "../../routes/TemplateRoutes";
import { Helmet } from "react-helmet-async";
import ResumeLoading from "../../component/shared/ResumeLoading";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeBuilder = () => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const queryParams = new URLSearchParams(location.search);
  const reactToPrintFn = useReactToPrint({ contentRef });

  // Access query parameters by name
  const resumeId = queryParams.get("resume");

  const { isLoading } = useGetResumeDataQuery(resumeId);

  if (isLoading) {
    return <ResumeLoading />;
  }

  return (
    <div className="max-w-[1170px] w-full mx-auto min-h-svh pb-14 pt-6 px-5 lg:flex gap-5">
      <Helmet>
        <title>Build Resume- Resume Craft</title>
      </Helmet>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-8 text-center">My Resume</h1>
        <ResumeBuilderNavbar reactToPrintFn={reactToPrintFn} />
        <div ref={contentRef}>
          <TemplateRoutes />
        </div>
      </div>
      <ResumeBuilderSidebar />
    </div>
  );
};

export default ResumeBuilder;
