import { Dialog, DialogPanel } from "@headlessui/react";
import { Button } from "@mui/material";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import ButtonSpinner from "../../shared/ButtonSpinner";

type TDeleteModalProps = {
  id: string;
  isLoading: boolean;
  handleDelete: ((id: string) => Promise<void>) | undefined | undefined;
};

const DeleteModal = ({ id, isLoading, handleDelete }: TDeleteModalProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white flex justify-center items-center size-10"
      >
        <div className="size-[32px] hover:bg-red-100 rounded flex justify-center items-center text-black hover:text-red-600">
          <MdOutlineDelete size={22} />
        </div>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/45">
          <DialogPanel className="w-[90%] sm:w-96 min-h-40 space-y-4 p-5 border bg-white rounded-lg flex flex-col justify-center items-center">
            <p>Are you sure want to download this?</p>

            <div className="flex gap-7">
              <Button variant="contained" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                color="error"
                variant="outlined"
                disabled={isLoading}
                onClick={() => handleDelete(id)}
              >
                {isLoading ? <ButtonSpinner /> : "Yes"}
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteModal;
