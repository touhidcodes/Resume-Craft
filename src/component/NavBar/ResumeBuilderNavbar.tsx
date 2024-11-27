import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ChooseResumeTemplate from "../Modal/ChooseResumeTemplate";
import ManageSectionsSidebar from "../layout/ManageSectionsSidebar";

const ResumeBuilderNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="space-x-5">
        <ChooseResumeTemplate
          variant="outlined"
          label="Template"
          size="medium"
          color="secondary"
          startIcon={<GridViewOutlinedIcon />}
        />

        <ManageSectionsSidebar />
      </div>
      <Button
        color="secondary"
        variant="outlined"
        startIcon={<DownloadOutlinedIcon />}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default ResumeBuilderNavbar;
