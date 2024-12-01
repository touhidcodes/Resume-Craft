import ResumeActionButton from "../../../component/dashboard/userDashboard/ResumeActionButton";
import resumeTemplate from "../../../assets/resume-template-img/resume-templates.jpg";
import { Helmet } from "react-helmet-async";

const AllResumes = () => {
  return (
    <div>
      <Helmet>
        <title>All Resumes - Resume Craft</title>
      </Helmet>
      <h2 className="text-xl font-bold">Resumes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
        {[...Array(10)].map((template, index) => (
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

export default AllResumes;
