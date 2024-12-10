import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";
import BodyForm from "../../form/BodyForm";
import { Button } from "@mui/material";
import { useUpadateCoverLetterMutation } from "../../../redux/features/coverLetter/coverLetterApi";

const BodyEditModal = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState("");

  const [updateBody, { isLoading }] = useUpadateCoverLetterMutation();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit = async () => {
    let toastId = toast.loading(" loading...", { duration: 1000 });
    try {
      const res = await updateBody({
        id: id,
        data: { body },
      }).unwrap();
      console.log(res);
      toast.success("Update Successfully", { id: toastId, duration: 2000 });

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
                <h3 className="text-xl font-semibold">Experience</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>

              <BodyForm body={body} setBody={setBody} />

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

export default BodyEditModal;
