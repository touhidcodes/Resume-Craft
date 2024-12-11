import ResumeActionButton from "../../../component/dashboard/userDashboard/ResumeActionButton";
import { Helmet } from "react-helmet-async";
import { Key } from "react";
import { useGetUserResumesQuery } from "../../../redux/features/resume/resumeApi";

interface Template {
  id: string;
  name?: string;
  lastUpdated?: string;
  image: string;
}

const AllResumes = () => {
  const { data: allResume, isLoading } = useGetUserResumesQuery("");
  const totalResume = allResume?.data;

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
          {totalResume?.map(
            (
              {
                template,
                name,
                lastUpdated,
                id,
              }: {
                template: Template;
                name: string;
                lastUpdated: string;
                id: string;
              },
              index: Key
            ) => (
              <div key={index}>
                <div className="bg-[#f2f1ffcf] p-5 mb-3">
                  <img
                    src={
                      template?.image
                        ? template.image
                        : "/placeholder-image.png"
                    }
                    alt="user's resume"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-semibold">{name}</h3>
                    <p className="text-xs text-muted">
                      Last updated:{" "}
                      {lastUpdated ? lastUpdated.split("T")[0] : "Unknown"}
                    </p>
                  </div>
                  <ResumeActionButton resumeId={id} id={template.id} />
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
