import { Button } from "@mui/material";
import resumeTemplate from "../../assets/resume-template-img/resume-templates.jpg";

const ResumeTemplate = () => {
  return (
    <div className="relative group">
      <div className="bg-white p-5 mb-3 cursor-pointer border border-neutral-200">
        <img
          src={resumeTemplate}
          alt="user's resume"
          className="object-cover object-center"
        />
      </div>
      <div className="w-full flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:transition-all group-hover:duration-300 scale-95">
        <Button variant="contained" size="small" sx={{ fontSize: [10, 14] }}>
          Use This Template
        </Button>
      </div>
    </div>
  );
};

export default ResumeTemplate;
