import { Button } from "@mui/material";
import ResumeActionButton from "./ResumeActionButton";
import { Key } from "react";
import { useGetAllTemplatesQuery } from "../../../redux/features/template/templateApi";

const UserCoverLetters = () => {
  const { data: allTemplates, isLoading } = useGetAllTemplatesQuery("");

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Cover Letters</h2>
        <Button variant="outlined" size="small" sx={{ fontSize: "12px" }}>
          View All
        </Button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
          {allTemplates?.data?.map(
            (
              template: { image: string | undefined },
              index: Key | null | undefined
            ) => (
              <div key={index}>
                <div className="bg-[#E6EBF1] p-5 mb-3">
                  <img
                    src={template.image}
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
            )
          )}
        </div>
      )}
    </div>
  );
};

export default UserCoverLetters;
