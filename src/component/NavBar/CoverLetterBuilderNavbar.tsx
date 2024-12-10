import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ChangeCoverLetterTemplate from "../Modal/ChangeCoverLetterTemplate";

const CoverLetterBuilderNavbar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-y-5 mb-6">
      {/* <ChangeResumeTemplate
        variant="outlined"
        label="Template"
        size="medium"
        color="secondary"
        startIcon={<GridViewOutlinedIcon />}
      /> */}

      <ChangeCoverLetterTemplate />

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
