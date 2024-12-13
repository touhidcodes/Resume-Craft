import { Button } from "@mui/material";
import { Key } from "react";
import { useGetUserCoverLettersQuery } from "../../../redux/features/coverLetter/coverLetterApi";
import { Link } from "react-router-dom";
import CoverLetterActionButton from "./CoverLetterActionButton";

interface Template {
  id: string;
  name?: string;
  lastUpdated?: string;
  template: { image: string };
}

const UserCoverLetters = () => {
  const { data: allCoverLetters, isLoading } = useGetUserCoverLettersQuery("");
  console.log(allCoverLetters?.data)
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Cover Letters</h2>
        {allCoverLetters?.data?.length > 5 && (
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
          {allCoverLetters?.data?.map(
            (template: Template, index: Key) => (
              <div key={index}>
                <div className="bg-[#E6EBF1] p-5 mb-3">
                  <img
                    src={
                      template?.template?.image
                        ? template.template.image
                        : "/placeholder-image.png"
                    } alt="user's resume"
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
                  <CoverLetterActionButton template={template} id={template.id} />
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
