import { Button } from "@mui/material";
import resumeTemplate from "../../../assets/resume-template-img/resume-templates.jpg";
import { MouseEvent, useState } from "react";
import ResumeActionButton from "./ResumeActionButton";

const UserResumes = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Resumes</h2>
        <Button variant="outlined" size="small" sx={{ fontSize: "12px" }}>
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
        {[...Array(5)].map((template, index) => (
          <div key={index}>
            <div className="bg-[#f2f1ffcf] p-5 mb-3">
              <img
                src={resumeTemplate}
                alt="user's resume"
                className="object-cover object-center"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold">Full Stack Resume</h3>
                <p className="text-xs text-muted">Last update 2 days ago</p>
              </div>
              <ResumeActionButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserResumes;
