import { useLocation } from "react-router-dom";
import ResumeBuilderNavbar from "../../component/NavBar/ResumeBuilderNavbar";
import ResumeBuilderSidebar from "../../component/layout/ResumeBuilderSidebar";
import { useGetResumeDataQuery } from "../../redux/features/resume/resumeApi";
import TemplateRoutes from "../../routes/TemplateRoutes";

const ResumeBuilder = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Access query parameters by name
  const resumeId = queryParams.get("resume"); 

  const { isLoading } = useGetResumeDataQuery(resumeId);

  if (isLoading) return;

  return (
    <div className="max-w-[1170px] w-full mx-auto min-h-svh py-10 flex gap-5">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-10 text-center">My Resume</h1>
        <ResumeBuilderNavbar />
        <TemplateRoutes />
      </div>
      <ResumeBuilderSidebar />
    </div>
  );
};

export default ResumeBuilder;
