import { Button } from "@mui/material";
import coverLetter from "../../../assets/resume-template-img/cover-letter.webp";
import ResumeActionButton from "./ResumeActionButton";

const UserCoverLetters = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Cover Letters</h2>
        <Button variant="outlined" size="small" sx={{ fontSize: "12px" }}>
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
        {[...Array(5)].map((template, index) => (
          <div key={index}>
            <div className="bg-[#E6EBF1] p-5 mb-3">
              <img
                src={coverLetter}
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

export default UserCoverLetters;
