import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { TResumeBuilderNavbarProps } from "../NavBar/ResumeBuilderNavbar";
import Progressbar from "../shared/Progressbar";
import useSectionComplete from "../../hooks/useSectionComplete";

type Section = {
  name: string;
  isActive: boolean;
};

const ResumeBuilderSidebar = ({
  reactToPrintFn,
}: TResumeBuilderNavbarProps) => {
  const { result, totalActiveSection, totalCompleteSection } =
    useSectionComplete();

  const percentage = Number(
    (totalCompleteSection / (Number(totalActiveSection) + 1)) * 100
  ).toPrecision(2);

  return (
    <div className="w-[280px]">
      <div className="mt-32 border py-5 px-7 rounded-lg bg-white mb-5">
        <div className="flex items-center gap-x-4">
          <Progressbar
            size={50}
            percentage={percentage}
            text={`${totalCompleteSection}/${totalActiveSection}`}
          />
          <h3 className="text-sm font-medium">Section Completion</h3>
        </div>
        <div className="space-y-2.5 mt-5">
          {result?.map((section: Section, index: number) => (
            <div
              key={section.name + index}
              className={`flex items-center py-3 px-4 rounded-md text-[15px] ${
                section.isActive ? "bg-neutral-100" : "bg-[#F9F2EB]"
              }`}
            >
              <h1 className="w-1/2 font-medium">{section.name}</h1>
              <h3
                className={`w-1/2 text-end text-sm ${
                  section.isActive ? "" : "text-[#b25900] font-medium"
                }`}
              >
                {section.isActive ? "Filled" : "Incomplete"}
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
