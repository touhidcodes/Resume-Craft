import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { headerValidationSchema } from "../../../zod/headerValidationSchema";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import { PersonalInfo } from "../../../types/resumeTypes";

import { useAppSelector } from "../../../redux/hooks";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";
import { useUpdateCoverLetterMutation } from "../../../redux/features/coverLetter/coverLetterApi";

type THeaderProps = {
  personalInfo: PersonalInfo | undefined;
};

// Define the form data type
type FormData = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
};

const HeaderEditModal = ({ personalInfo }: THeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useAppSelector((state) => state.coverLetter.coverLetter?.id);
  const [updatePersonal, { isLoading }] = useUpdateCoverLetterMutation();

  // Use the correct type for useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(headerValidationSchema),
    defaultValues: {
      email: personalInfo?.email,
      fullName: personalInfo?.fullName,
      jobTitle: personalInfo?.jobTitle,
      phone: personalInfo?.phone,
      location: personalInfo?.location,
    },
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await updatePersonal({
        id: id,
        data: { personalInfo: data },
      }).unwrap();

      if (res.success) {
        toast.success(res.message);
      }

      close();
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <ResumeEditBtn handleClick={open} className="custom-shadow rounded-md" />

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
                <h3 className="text-xl font-semibold">Personal Info</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="p-5 col-span-7 space-y-5">
                    <div className="w-full">
                      <p className="mb-3">
                        Name <span className="text-red-500">*</span>
                      </p>
                      <TextField
                        id="outlined-basic"
                        label="Your name"
                        fullWidth
                        variant="outlined"
                        {...register("fullName")}
                        color={errors?.fullName?.message ? "error" : "primary"}
                      />
                      <p className="text-sm text-red-500 mt-1">
                        {errors?.fullName?.message as string}
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="mb-3">
                        Job Title <span className="text-red-500">*</span>
                      </p>
                      <TextField
                        id="outlined-basic"
                        label="Resume title"
                        placeholder="ft. Software Engineer"
                        fullWidth
                        variant="outlined"
                        {...register("jobTitle")}
                        color={errors?.jobTitle?.message ? "error" : "primary"}
                      />
                      <p className="text-sm text-red-500 mt-1">
                        {errors?.jobTitle?.message as string}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">
                          Email <span className="text-red-500">*</span>
                        </p>
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          fullWidth
                          variant="outlined"
                          {...register("email")}
                          color={errors?.email?.message ? "error" : "primary"}
                        />
                        <p className="text-sm text-red-500 mt-1">
                          {errors?.email?.message as string}
                        </p>
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">
                          Phone <span className="text-red-500">*</span>
                        </p>
                        <TextField
                          id="outlined-basic"
                          label="Phone number"
                          fullWidth
                          variant="outlined"
                          {...register("phone")}
                          color={errors?.phone?.message ? "error" : "primary"}
                        />
                        <p className="text-sm text-red-500 mt-1">
                          {errors?.phone?.message as string}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">
                          Location <span className="text-red-500">*</span>
                        </p>
                        <TextField
                          id="outlined-basic"
                          label="Location"
                          fullWidth
                          variant="outlined"
                          {...register("location")}
                          color={
                            errors?.location?.message ? "error" : "primary"
                          }
                        />
                        <p className="text-sm text-red-500 mt-1">
                          {errors?.location?.message as string}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5"></div>
                  </div>
                  <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
                    <h2 className="text-lg font-semibold">Tips</h2>
                    <div className="text-sm mt-5 space-y-6">
                      <p>
                        You may want to use the same header you use on your
                        resume (name, contact information) on your cover letter
                        for consistency.
                      </p>
                      <p>
                        Don’t simply summarize or rehash your resume. Rather,
                        provide some additional detail about what you bring to
                        the table. For example, you might discuss personal
                        qualities (soft skills), how your values align with the
                        company’s, what motivates you (and how that will drive
                        you to succeed at the company), etc.
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
                  variant={isLoading ? "outlined" : "contained"}
                  disabled={isLoading}
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                  autoFocus
                >
                  {isLoading ? <ButtonSpinner /> : "Save"}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default HeaderEditModal;
