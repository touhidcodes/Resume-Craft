import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ChangeCoverLetterTemplate from "../Modal/ChangeCoverLetterTemplate";
import { TResumeBuilderNavbarProps } from "./ResumeBuilderNavbar";

const CoverLetterBuilderNavbar = ({
  reactToPrintFn,
}: TResumeBuilderNavbarProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-y-5 mb-6">
      <ChangeCoverLetterTemplate />

      <Button
        color="secondary"
        variant="outlined"
        onClick={() => reactToPrintFn()}
        startIcon={<DownloadOutlinedIcon />}
      >
        Download
      </Button>
    </div>
  );
};

export default CoverLetterBuilderNavbar;
