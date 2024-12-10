import ResumeActionButton from "../../../component/dashboard/userDashboard/ResumeActionButton";
import { Helmet } from "react-helmet-async";
import { Key } from "react";
import { useGetUserResumesQuery } from "../../../redux/features/resume/resumeApi";

interface Template {
  id: string;
  name?: string;
  lastUpdated?: string;
  template: { image: string };
}

const AllResumes = () => {
  const { data: allTemplates, isLoading } = useGetUserResumesQuery("");
  const totalTemplates = allTemplates?.data;

  return (
    <div>
      <Helmet>
        <title>All Resumes - Resume Craft</title>
      </Helmet>
      <h2 className="text-xl font-bold">Resumes</h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
          {totalTemplates?.map(
            (template: Template, index: Key) => (
              <div key={index}>
                <div className="bg-[#f2f1ffcf] p-5 mb-3">
                  <img
                     src={
                      template?.template?.image
                        ? template.template.image
                        : "/placeholder-image.png"
                    }
                    alt="user's resume"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-semibold">{template.name}</h3>
                    <p className="text-xs text-muted">
                    Last updated:{" "}
                    {template.lastUpdated
                      ? template.lastUpdated.split("T")[0]
                      : "Unknown"}
                  </p>
                  </div>
                  <ResumeActionButton template={template} id={template.id} />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllResumes;
