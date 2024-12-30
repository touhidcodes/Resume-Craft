import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AwardValidationSchema } from "../../../zod/awardValidationSchema";
import AwardForm from "../../form/AwardForm";
import { useAddAwardMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";
import { useAppSelector } from "../../../redux/hooks";
import ResumeAddBtn from "../../shared/ResumeAddBtn";

type TAwardFormData = {
  name: string;
  organization: string;
  year: number;
  description?: string;
};

const AddAwardModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const resumeId = useAppSelector((state) => state.resume.resume?.id);
  const [addAward, { isLoading }] = useAddAwardMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAwardFormData>({
    resolver: zodResolver(AwardValidationSchema),
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<TAwardFormData> = async (data) => {
    try {
      const res = await addAward({ resumeId, ...data, description }).unwrap();

      if (res.success) {
        toast.success(res?.message);
      }

      close();
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <ResumeAddBtn handleClick={open} className="custom-shadow rounded-md" />

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
                <h3 className="text-xl font-semibold">Certificates</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <AwardForm
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
                  color="primary"
                  disabled={isLoading}
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

export default AddAwardModal;
