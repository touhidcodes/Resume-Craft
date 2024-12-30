import { Button } from "@mui/material";
import ResumeActionButton from "./ResumeActionButton";
import { Key } from "react";
import { Link } from "react-router-dom";
import { useGetUserResumesQuery } from "../../../redux/features/resume/resumeApi";


interface Template {
  id: string;
  name?: string;
  lastUpdated?: string;
  image: string;
}
const UserResumes = () => {
  const { data: allResume, isLoading } = useGetUserResumesQuery("");
  const limitedResume = allResume?.data?.slice(0, 5);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Resumes</h2>
        {allResume?.data?.length > 5 && (
          <Button
            component={Link}
            to="/USER/resumes"
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px" }}
          >
            View All
          </Button>
        )}
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : limitedResume?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
          {limitedResume.map(
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
                    alt={`${name || "Resume"} image`}
                    className="h-[240px] w-full"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-semibold">
                      {name || "Untitled Resume"}
                    </h3>
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
      ) : (
        <div className="flex justify-center items-center h-64">
          <p>No resumes found. Start creating your first resume!</p>
        </div>
      )}
    </div>
  );
};

export default UserResumes;
