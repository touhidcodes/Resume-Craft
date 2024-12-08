import { Button } from "@mui/material";
import ChangeResumeTemplate from "../Modal/ChangeResumeTemplate";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const CoverLetterBuilderNavbar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-y-5 mb-6">
      <ChangeResumeTemplate
        variant="outlined"
        label="Template"
        size="medium"
        color="secondary"
        startIcon={<GridViewOutlinedIcon />}
      />

      <Button
        color="secondary"
        variant="outlined"
        // onClick={() => reactToPrintFn()}
        startIcon={<DownloadOutlinedIcon />}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default CoverLetterBuilderNavbar;
