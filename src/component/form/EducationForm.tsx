import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextEditor from "../shared/TextEditor";
import { Dispatch } from "react";

type TExperienceFormProps = {
  control: any;
  register: any;
  errors: any;
  description: string;
  setDescription: Dispatch<React.SetStateAction<string>>;
};

const EducationForm = ({
  control,
  register,
  errors,
  description,
  setDescription,
}: TExperienceFormProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="p-5 col-span-7 space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <p className="mb-3">
                Institution <span className="text-red-500">*</span>
              </p>
              <TextField
                id="outlined-basic"
                label="Institution Name"
                fullWidth
                variant="outlined"
                color={errors.institution ? "error" : "primary"}
                {...register("institution")}
              />
              {errors.institution && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.institution.message}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <p className="mb-3">
                Degree <span className="text-red-500">*</span>
              </p>
              <TextField
                id="outlined-basic"
                label="Degree Name"
                fullWidth
                variant="outlined"
                color={errors.degree ? "error" : "primary"}
                {...register("degree")}
              />
              {errors.degree && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.degree.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-1">
            <div>
              <p>
                Start date <span className="text-red-500">*</span>
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Start Date"
                        views={["month", "year"]}
                        format="MM/YYYY"
                        value={
                          field.value ? dayjs(field.value, "MM/YYYY") : null
                        }
                        onChange={(date) => {
                          field.onChange(dayjs(date).format("MM/YYYY"));
                        }}
                      />
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {errors.startDate && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div>
              <p>End date</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="End Date"
                        views={["month", "year"]}
                        format="MM/YYYY"
                        value={
                          field.value ? dayjs(field.value, "MM/YYYY") : null
                        }
                        onChange={(date) => {
                          field.onChange(dayjs(date).format("MM/YYYY"));
                        }}
                      />
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          <div>
            <p className="mb-3">
              Location <span className="text-red-500">*</span>
            </p>
            <TextField
              id="outlined-basic"
              label="City, state"
              fullWidth
              variant="outlined"
              color={errors.location ? "error" : "primary"}
              {...register("location")}
            />
            {errors.location && (
              <p className="text-sm text-red-500 mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium mb-3">
              What were your responsibilities and accomplishments?
            </p>
            <TextEditor value={description} setValue={setDescription} />
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

export default EducationForm;
