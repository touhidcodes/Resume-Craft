import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCoverLetterTemplateQuery } from "../../../redux/features/template/templateApi";
import { TTemplate } from "../../../component/shared/ResumeTemplate";
import { useGetUserCoverLettersQuery } from "../../../redux/features/coverLetter/coverLetterApi";
import CoverLetterNameModal from "../../../component/Modal/CoverLetterNameModal";

const ChooseCoverLetterTemplatesTestPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const { data: templatesData, isLoading: isLoadingTemplates } =
    useGetAllCoverLetterTemplateQuery(null);
  const { data: resumeData, isLoading: isLoadingResumes } =
    useGetUserCoverLettersQuery(null);

  const loading = isLoadingTemplates || isLoadingResumes;

  const createdCoverLetterCount = resumeData?.data?.length || 0;

  const coverLetterLimit = 10;

  const handleBackHome = () => {
    setOpen(false);
    navigate("/");
  };

  if (loading) {
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
            Choose Cover Letter Template (Test Mode)
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleBackHome}>
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>

      <div className="bg-blue-50 text-blue-800 px-4 py-3 text-center text-sm font-medium space-y-1">
        <p>
          You've created <strong>{createdCoverLetterCount}</strong> cover
          letter(s).
        </p>
        <p className="text-xs text-gray-600">
          This test mode allows creating more cover letters beyond the free
          limit of {coverLetterLimit}.
        </p>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 pt-6 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-3">
        {templatesData?.data?.map((template: TTemplate) => (
          <div key={template.id} className="relative group">
            <div>
              <div className="bg-[#F4F4FF] p-5 mb-3 cursor-pointer border border-neutral-200">
                <img
                  src={template.image}
                  alt="cover letter template"
                  className="object-center h-[240px] w-full"
                />
              </div>
              <h3 className="font-medium">{template.name}</h3>
              <p className="text-xs text-neutral-500">
                ({template.usageCount}) users use this
              </p>
            </div>
            <div className="bg-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex justify-center items-center h-full px-3">
                <CoverLetterNameModal template={template} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default ChooseCoverLetterTemplatesTestPage;
