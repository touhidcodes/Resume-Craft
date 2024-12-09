import { Button } from "@mui/material";
import ResumeActionButton from "./ResumeActionButton";
import { useGetAllTemplatesQuery } from "../../../redux/features/template/templateApi";
import { Key } from "react";
import { Link } from "react-router-dom";

interface Template {
  id: string;
  image?: string;
  name?: string;
  lastUpdated?: string;
}

const UserResumes = () => {
  const { data: allTemplates, isLoading } = useGetAllTemplatesQuery("");
  const limitedTemplates = allTemplates?.data?.slice(0, 5);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Resumes</h2>
        {allTemplates?.data?.length > 5 && (
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
      ) : limitedTemplates?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
          {limitedTemplates.map((template: Template, index: Key) => (
            <div key={index}>
              <div className="bg-[#f2f1ffcf] p-5 mb-3">
                <img
                  src={template.image || "/placeholder-image.png"}
                  alt={`${template.name || "Resume"} image`}
                  className="object-cover object-center"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-semibold">
                    {template.name || "Untitled Resume"}
                  </h3>
                  <p className="text-xs text-muted">
                    Last updated: {template.lastUpdated || "Unknown"}
                  </p>
                </div>
                <ResumeActionButton template={template} id={template.id} />
              </div>
            </div>
          ))}
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
