import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import TextEditor from "../shared/TextEditor";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { educationValidationSchema } from "../../zod/educationValidationSchema";

type EducationFormData = {
  school: string;
  fieldOfStudy: string;
  graduationDate: string;
  location: string;
};

const EducationEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [experience, setExperience] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationValidationSchema),
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<EducationFormData> = (data) => {
    console.log("Form Submitted:", data);
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
                <h3 className="text-xl font-semibold">Education</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="p-5 col-span-7 space-y-5">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">School</p>
                        <TextField
                          id="outlined-basic"
                          label="School name"
                          fullWidth
                          variant="outlined"
                          color={errors.school ? "error" : "primary"}
                          {...register("school")}
                        />
                        {errors.school && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.school.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Field of study</p>
                        <TextField
                          id="outlined-basic"
                          label="Field of study"
                          fullWidth
                          variant="outlined"
                          color={errors.fieldOfStudy ? "error" : "primary"}
                          {...register("fieldOfStudy")}
                        />
                        {errors.fieldOfStudy && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.fieldOfStudy.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p>Graduation Date</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker"]}
                            sx={{ pt: 1.5 }}
                          >
                            <Controller
                              name="graduationDate"
                              control={control}
                              render={({ field }) => (
                                <DatePicker
                                  {...field}
                                  label="Graduation Date"
                                  views={["month", "year"]}
                                  value={
                                    field.value
                                      ? dayjs(field.value, "MM/YYYY")
                                      : null
                                  }
                                  onChange={(date) =>
                                    field.onChange(
                                      dayjs(date).format("MM/YYYY")
                                    )
                                  }
                                  format="MM/YYYY"
                                />
                              )}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        {errors.graduationDate && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.graduationDate.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Location</p>
                        <TextField
                          id="outlined-basic"
                          label="City, State"
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
                        It pays to be picky about the academic accomplishments
                        that you list on your resume. Employers want to see a
                        maximum of three education entries in a resume.* If you
                        have more academic achievements, consider listing them
                        under one of your main education entries.
                      </p>
                      <p>
                        Listing your education shows that you meet any necessary
                        prerequisites to employment and allows you to showcase
                        your book smarts if you’re a little short on actual
                        experience.
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
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

export default EducationEditModal;
