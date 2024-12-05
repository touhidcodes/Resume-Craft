import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

type TDeleteModalProps = {
  handleDelete: () => void;
};

const DeleteModal = ({ handleDelete }: TDeleteModalProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        // onClick={handleClick}
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
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/45">
          <DialogPanel className="max-w-md space-y-4 border bg-white p-12 rounded-lg">
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>No</button>
              <button onClick={() => handleDelete()}>Yes</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteModal;
