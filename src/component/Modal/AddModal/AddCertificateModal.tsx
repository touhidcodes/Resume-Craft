import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import CertificateForm from "../../form/CertificateForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { certificateValidationSchema } from "../../../zod/certificateValidationSchema";
import ResumeAddBtn from "../../shared/ResumeAddBtn";
import { useAppSelector } from "../../../redux/hooks";
import { useAddCertificateMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";

type TCertificateFormData = {
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  certificateLink?: string;
};

const AddCertificateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeId = useAppSelector((state) => state.resume.resume?.id);
  const [addCertificate, { isLoading }] = useAddCertificateMutation();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCertificateFormData>({
    resolver: zodResolver(certificateValidationSchema),
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Handle form submission
  const onSubmit: SubmitHandler<TCertificateFormData> = async (data) => {
    try {
      const payload = { resumeId, ...data };
      const res = await addCertificate(payload).unwrap();

      if (res?.success) {
        toast.success(res.message);
      }

      close();
    } catch (error) {
      console.log(error);
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
              <CertificateForm
                control={control}
                register={register}
                errors={errors}
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

export default AddCertificateModal;
