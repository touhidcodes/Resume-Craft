import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { headerValidationSchema } from "../../../zod/headerValidationSchema";
import ResumeEditBtn from "../../shared/ResumeEditBtn";

// Define the form data type
type FormData = {
  userName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
};

const HeaderEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use the correct type for useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(headerValidationSchema),
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
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
                        {...register("userName")}
                        color={errors?.userName?.message ? "error" : "primary"}
                      />
                      <p className="text-sm text-red-500 mt-1">
                        {errors?.userName?.message as string}
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="mb-3">
                        Title <span className="text-red-500">*</span>
                      </p>
                      <TextField
                        id="outlined-basic"
                        label="Resume title"
                        placeholder="ft. Software Engineer"
                        fullWidth
                        variant="outlined"
                        {...register("title")}
                        color={errors?.title?.message ? "error" : "primary"}
                      />
                      <p className="text-sm text-red-500 mt-1">
                        {errors?.title?.message as string}
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
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Website</p>
                        <TextField
                          id="outlined-basic"
                          label="Website link"
                          fullWidth
                          variant="outlined"
                          {...register("website")}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Linkedin</p>
                        <TextField
                          id="outlined-basic"
                          label="Linkedin profile link"
                          fullWidth
                          variant="outlined"
                          {...register("linkedin")}
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Github</p>
                        <TextField
                          id="outlined-basic"
                          label="Github link"
                          fullWidth
                          variant="outlined"
                          {...register("github")}
                        />
                      </div>
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                  autoFocus
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

export default HeaderEditModal;
