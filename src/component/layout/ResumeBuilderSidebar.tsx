import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { TResumeBuilderNavbarProps } from "../NavBar/ResumeBuilderNavbar";
import Progressbar from "../shared/Progressbar";

const sections = [
  {
    name: "Contact",
    isComplete: true,
  },
  {
    name: "Summary",
    isComplete: false,
  },
  {
    name: "Experience",
    isComplete: true,
  },
  {
    name: "Skills",
    isComplete: false,
  },
  {
    name: "Education",
    isComplete: true,
  },
  {
    name: "Certificates",
    isComplete: false,
  },
  {
    name: "Language",
    isComplete: true,
  },
  {
    name: "Awards",
    isComplete: true,
  },
];

const ResumeBuilderSidebar = ({
  reactToPrintFn,
}: TResumeBuilderNavbarProps) => {
  return (
    <div className="w-[280px]">
      <div className="mt-32 border py-5 px-7 rounded-lg bg-white mb-5">
        <div className="flex items-center gap-x-4">
          <Progressbar size={50} percentage={40} text={"2/5"} />
          <h3 className="text-sm font-medium">Section Completion</h3>
        </div>
        <div className="space-y-2.5 mt-8">
          {sections.map((section, index) => (
            <div
              key={section.name + index}
              className={`flex items-center py-3 px-4 rounded-md text-[15px] ${
                section.isComplete ? "bg-neutral-100" : "bg-[#F9F2EB]"
              }`}
            >
              <h1 className="w-1/2 font-medium">{section.name}</h1>
              <h3
                className={`w-1/2 text-end text-sm ${
                  section.isComplete ? "" : "text-[#b25900] font-medium"
                }`}
              >
                {section.isComplete ? "Filled" : "Incomplete"}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          sx={{ bgcolor: "#fff", border: "1px solid #ddd", padding: "10px 0" }}
          onClick={() => reactToPrintFn()}
          startIcon={<DownloadOutlinedIcon />}
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default ResumeBuilderSidebar;
