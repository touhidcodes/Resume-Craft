import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllTemplatesQuery } from "../../../redux/features/template/templateApi";
import { useGetUserResumesQuery } from "../../../redux/features/resume/resumeApi";
import ResumeTemplate, {
  TTemplate,
} from "../../../component/shared/ResumeTemplate";

const ChooseResumeTemplatesTestPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const { data: templatesData, isLoading: isLoadingTemplates } =
    useGetAllTemplatesQuery(null);
  const { data: resumeData, isLoading: isLoadingResumes } =
    useGetUserResumesQuery(null);

  const loading = isLoadingTemplates || isLoadingResumes;

  const createdResumesCount = resumeData?.data?.length || 0;
  const resumeLimit = 10;

  const handleBackHome = () => {
    setOpen(false);
    navigate("/"); // go to home explicitly
  };

  if (loading) {
    // Show a full screen loader while fetching data
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Dialog fullScreen open={open} onClose={handleBackHome}>
      <AppBar
        elevation={0}
        sx={{
          position: "relative",
          bgcolor: "#fff",
          color: "#000",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1170px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Typography sx={{ flex: 1, fontSize: [16, 20] }}>
            Choose Resume Template (Test Mode)
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleBackHome}>
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>

      <div className="bg-blue-50 text-blue-800 px-4 py-3 text-center text-sm font-medium space-y-1">
        <p>
          You've created <strong>{createdResumesCount}</strong> resume(s).
        </p>
        <p className="text-xs text-gray-600">
          This test mode allows creating more resumes beyond the free limit of{" "}
          {resumeLimit}.
        </p>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 pt-6 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-3">
        {templatesData?.data?.map((template: TTemplate) => (
          <ResumeTemplate
            key={template.id}
            template={template}
            canCreate={true}
          />
        ))}
      </div>
    </Dialog>
  );
};

export default ChooseResumeTemplatesTestPage;
