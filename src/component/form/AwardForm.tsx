import { TextField } from "@mui/material";
import { Dispatch } from "react";
import TextEditor from "../shared/TextEditor";

type TAwardFormProps = {
  register: any;
  errors: any;
  description: string;
  setDescription: Dispatch<React.SetStateAction<string>>;
};

const AwardForm = ({
  register,
  errors,
  description,
  setDescription,
}: TAwardFormProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="p-5 col-span-7 space-y-5">
          <div className="w-full">
            <p className="mb-3">
              Name <span className="text-red-500">*</span>
            </p>
            <TextField
              id="outlined-basic"
              label="Name"
              fullWidth
              variant="outlined"
              color={errors.name ? "error" : "primary"}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="w-full">
            <p className="mb-3">
              Organization <span className="text-red-500">*</span>
            </p>
            <TextField
              id="outlined-basic"
              label="Organization"
              fullWidth
              variant="outlined"
              color={errors.organization ? "error" : "primary"}
              {...register("organization")}
            />
            {errors.organization && (
              <p className="text-sm text-red-500 mt-1">
                {errors.organization.message}
              </p>
            )}
          </div>

          <div>
            <p className="mb-3">
              Year <span className="text-red-500">*</span>
            </p>
            <TextField
              id="outlined-basic"
              label="Year"
              type="number"
              fullWidth
              variant="outlined"
              color={errors.year ? "error" : "primary"}
              {...register("year", {
                setValueAs: (value: unknown) =>
                  value === "" ? undefined : Number(value),
              })}
            />
            {errors.year && (
              <p className="text-sm text-red-500 mt-1">{errors.year.message}</p>
            )}
          </div>

          <div>
            <p className="font-medium mb-3">
              Write a description about your achievement?
            </p>
            <TextEditor value={description || ""} setValue={setDescription} />
          </div>
        </div>
        <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
          <h2 className="text-lg font-semibold">Tips</h2>
          <div className="text-sm mt-5 space-y-6">
            <p>
              It pays to be picky about the academic accomplishments that you
              list on your resume. Employers want to see a maximum of three
              education entries in a resume.* If you have more academic
              achievements, consider listing them under one of your main
              education entries.
            </p>
            <p>
              Listing your education shows that you meet any necessary
              prerequisites to employment and allows you to showcase your book
              smarts if you’re a little short on actual experience.
            </p>
            <p>
              *Indeed survey conducted with Lucid, N=2661 employers among 10
              industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardForm;
