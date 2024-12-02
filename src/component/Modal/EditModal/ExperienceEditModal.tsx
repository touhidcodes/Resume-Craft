import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { experienceValidationSchema } from "../../../zod/experienceValidationSchema";
import { Experience } from "../../../types/resumeTypes";
import ExperienceForm from "../../form/ExperienceForm";
import { useUpdateExperienceMutation } from "../../../redux/features/resume/resumeApi";

type TExperienceEditModalProps = {
  experience: Experience;
};

type ExperienceFormData = {
  id: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
};

const ExperienceEditModal = ({ experience }: TExperienceEditModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [responsibilities, setResponsibilities] = useState(
    experience.responsibilities || ""
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceValidationSchema),
    defaultValues: {
      companyName: experience.companyName,
      jobTitle: experience.jobTitle,
      startDate: experience.startDate,
      endDate: experience.endDate || "",
      location: experience.location,
    },
  });

  const [updateExperience, { isLoading }] = useUpdateExperienceMutation();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit: SubmitHandler<ExperienceFormData> = async (data) => {
    console.log(data);
    // updateExperience({ experienceId: experience.id, data });
    console.log(data);
    // experience
    // close();
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

              <ExperienceForm
                control={control}
                register={register}
                errors={errors}
                responsibilities={responsibilities}
                setResponsibilities={setResponsibilities}
              />

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
