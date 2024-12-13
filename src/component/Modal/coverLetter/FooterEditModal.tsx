import { toast } from "sonner";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import ButtonSpinner from "../../shared/ButtonSpinner";
import { Button } from "@mui/material";
import CloseForm from "../../form/CloseForm";
import { useUpdateCoverLetterMutation } from "../../../redux/features/coverLetter/coverLetterApi";
import { useAppSelector } from "../../../redux/hooks";

const FooterEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeCover, setCloseCover] = useState("");
  const id = useAppSelector((state) => state.coverLetter.coverLetter?.id);
  const [updateClose, { isLoading }] = useUpdateCoverLetterMutation();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit = async () => {
    let toastId = toast.loading(" loading...", { duration: 1000 });
    try {
      const res = await updateClose({
        id: id,
        data: { closing: closeCover },
      }).unwrap();

      toast.success(res?.message, { id: toastId, duration: 2000 });

      close();
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
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
                <h3 className="text-xl font-semibold">Closeing</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>

              {/* <ExperienceForm
                  control={control}
                  register={register}
                  errors={errors}
                  responsibilities={responsibilities}
                  setResponsibilities={setResponsibilities}
                /> */}

              <CloseForm
                closeCover={closeCover}
                setCloseCover={setCloseCover}
              />

              <div className="py-4 px-5 space-x-5 flex justify-end border-t">
                <Button variant="outlined" autoFocus onClick={close}>
                  Cancel
                </Button>
                <Button
                  variant={isLoading ? "outlined" : "contained"}
                  color="primary"
                  disabled={isLoading}
                  onClick={onSubmit}
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

export default FooterEditModal;
