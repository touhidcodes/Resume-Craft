import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import TextEditor from "../shared/TextEditor";
import { Dispatch } from "react";

type TExperienceFormProps = {
  control: any;
  register: any;
  errors: any;
  responsibilities: string;
  setResponsibilities: Dispatch<React.SetStateAction<string>>;
};

const ExperienceForm = ({
  control,
  register,
  errors,
  responsibilities,
  setResponsibilities,
}: TExperienceFormProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="p-5 col-span-7 space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <p className="mb-3">
                Company Name <span className="text-red-500">*</span>
              </p>
              <TextField
                id="outlined-basic"
                label="Company Name"
                fullWidth
                variant="outlined"
                color={errors.companyName ? "error" : "primary"}
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <p className="mb-3">
                Job Title <span className="text-red-500">*</span>
              </p>
              <TextField
                id="outlined-basic"
                label="Job Title"
                fullWidth
                variant="outlined"
                color={errors.jobTitle ? "error" : "primary"}
                {...register("jobTitle")}
              />
              {errors.jobTitle && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.jobTitle.message}
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
                        onChange={(date) =>
                          field.onChange(dayjs(date).format("MM/YYYY"))
                        }
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
                        onChange={(date) =>
                          field.onChange(dayjs(date).format("MM/YYYY"))
                        }
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
            <TextEditor
              value={responsibilities}
              setValue={setResponsibilities}
            />
          </div>
        </div>
        <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
          <h2 className="text-lg font-semibold">Tips</h2>
          <div className="text-sm mt-5 space-y-6">
            <p>
              The difference is in the details. More than 80% of employers think
              that a phone number must always be present on a resume.* Make sure
              that you add your contact information so that employers can
              contact you for a job interview!
            </p>
            <p>
              Employers usually want to know the city and state you currently
              live in, even if you plan to move soon. If you’re applying for a
              position that is located far away, share a little about why you’re
              applying in your cover letter to help the employer better
              understand why you’re still a great fit for the job.
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

export default ExperienceForm;
