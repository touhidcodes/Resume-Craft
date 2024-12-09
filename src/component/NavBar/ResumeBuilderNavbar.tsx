import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ManageSectionsSidebar from "../layout/ManageSectionsSidebar";
import ChangeResumeTemplate from "../Modal/ChangeResumeTemplate";
import { UseReactToPrintFn } from "react-to-print";

export type TResumeBuilderNavbarProps = {
  reactToPrintFn: UseReactToPrintFn;
};

const ResumeBuilderNavbar = ({ reactToPrintFn }: TResumeBuilderNavbarProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-y-5 mb-6">
      <div className="flex items-center justify-between md:gap-x-5">
        <ChangeResumeTemplate
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
        sx={{ bgcolor: "#fff" }}
        onClick={() => reactToPrintFn()}
        startIcon={<DownloadOutlinedIcon />}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default ResumeBuilderNavbar;
