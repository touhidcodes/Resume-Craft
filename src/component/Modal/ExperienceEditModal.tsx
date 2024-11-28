import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextEditor from "../shared/TextEditor";
import { experienceValidationSchema } from "../../zod/experienceValidationSchema";
import dayjs from "dayjs";

type ExperienceFormData = {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
};

const ExperienceEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [experience, setExperience] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceValidationSchema),
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<ExperienceFormData> = (data) => {
    // console.log("Form Submitted:", data);
    console.log(experience);
    close();
  };

  return (
    <>
      <ResumeEditBtn handleClick={open} />

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-[999] focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/45">
            <DialogPanel
              transition
              className="w-full max-h-[calc(100svh_-_100px)] max-w-[950px] rounded-lg backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-white flex flex-col justify-between"
            >
              <DialogTitle
                as="h3"
                className="flex justify-between items-center border-b py-3 px-5"
              >
                <h3 className="text-xl font-semibold">Experience</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="p-5 col-span-7 space-y-5">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Company Name</p>
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
                        <p className="mb-3">Job Title</p>
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

                    <div>
                      <p>Start date and End date</p>
                      <div className="flex flex-col md:flex-row gap-5 mt-1">
                        <div>
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
                                      field.value
                                        ? dayjs(field.value, "MM/YYYY")
                                        : null
                                    }
                                    onChange={(date) => {
                                      field.onChange(
                                        dayjs(date).format("MM/YYYY")
                                      );
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
                          {" "}
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
                                      field.value
                                        ? dayjs(field.value, "MM/YYYY")
                                        : null
                                    }
                                    onChange={(date) => {
                                      field.onChange(
                                        dayjs(date).format("MM/YYYY")
                                      );
                                    }}
                                  />
                                )}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                          {errors.endDate && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.endDate.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3">Location</p>
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
                      <TextEditor value={experience} setValue={setExperience} />
                    </div>
                  </div>
                  <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
                    <h2 className="text-lg font-semibold">Tips</h2>
                    <div className="text-sm mt-5 space-y-6">
                      <p>
                        The difference is in the details. More than 80% of
                        employers think that a phone number must always be
                        present on a resume.* Make sure that you add your
                        contact information so that employers can contact you
                        for a job interview!
                      </p>
                      <p>
                        Employers usually want to know the city and state you
                        currently live in, even if you plan to move soon. If
                        you’re applying for a position that is located far away,
                        share a little about why you’re applying in your cover
                        letter to help the employer better understand why you’re
                        still a great fit for the job.
                      </p>
                      <p>
                        *Indeed survey conducted with Lucid, N=2661 employers
                        among 10 industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialog footer */}
              <div className="py-4 px-5 space-x-5 flex justify-end border-t">
                <Button variant="outlined" autoFocus onClick={close}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ExperienceEditModal;
