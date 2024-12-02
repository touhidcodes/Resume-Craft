import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { educationValidationSchema } from "../../../zod/educationValidationSchema";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import EducationForm from "../../form/EducationForm";
import { Education } from "../../../types/resumeTypes";
import { useUpdateEducationMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";

type TEducationEditProps = {
  education: Education;
};

type EducationFormData = {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  location: string;
};

const EducationEditModal = ({ education }: TEducationEditProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState(education.description);
  const [updateEducation, { isLoading }] = useUpdateEducationMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationValidationSchema),
    defaultValues: {
      degree: education.degree,
      institution: education.institution,
      startDate: education.startDate,
      endDate: education.endDate || "",
      location: education.location,
    },
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<EducationFormData> = async (data) => {
    try {
      const res = await updateEducation({
        id: education.id,
        data: { ...data, description },
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message);
      }

      close();
    } catch (error) {
      console.log(error);
    }
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

              <EducationForm
                control={control}
                register={register}
                errors={errors}
                description={description}
                setDescription={setDescription}
              />

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

export default EducationEditModal;
