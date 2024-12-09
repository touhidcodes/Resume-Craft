import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";
import MultipleSelect from "../../builder/MultipleSelect";
import { useUpdateResumeMutation } from "../../../redux/features/resume/resumeApi";
import { useAppSelector } from "../../../redux/hooks";

type THobbyEditProps = {
  hobby: string[] | undefined;
};

const HobbyEditModal = ({ hobby }: THobbyEditProps) => {
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hobbies, setHobbies] = useState(hobby || []);
  const resumeId = useAppSelector((state) => state.resume.resume?.id);
  const [updateHobby, { isLoading }] = useUpdateResumeMutation();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleRemoveHobby = (hobby: string) => {
    const isHobbyAlreadyExist = hobbies.find((sk) => sk === hobby);

    if (!isHobbyAlreadyExist) {
    }
    const filteredSkills = hobbies.filter((item) => item !== hobby);
    setHobbies(filteredSkills);
  };

  const handleSubmit = async () => {
    try {
      const res = await updateHobby({
        id: resumeId,
        data: { hobby: hobbies },
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      close();
    }
  };

  useEffect(() => {
    if (hobbies.length < 1) {
      setError("Hobby is required");
    } else {
      setError("");
    }
  }, [hobbies]);

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
              className="w-full max-h-[calc(100svh_-_100px)] max-w-md h-96 rounded-lg backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-white flex flex-col justify-between"
            >
              <DialogTitle
                as="h3"
                className="flex justify-between items-center border-b py-3 px-5"
              >
                <h3 className="text-xl font-semibold">Hobby</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>

              <div className="p-5 h-full overflow-y-auto">
                <MultipleSelect
                  value={hobbies}
                  setValue={setHobbies}
                  label="Hobbies"
                  placeholder="Type you hobby and press enter..."
                />

                <p className="mt-1 text-xs text-red-500">{error}</p>
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  {hobbies.map((hobby, index) => (
                    <button
                      key={hobby + index}
                      className="flex items-center gap-x-3 text-xs border rounded-md py-1.5 px-3 hover:border-neutral-400 cursor-default"
                    >
                      <span>{hobby}</span>
                      <Close
                        fontSize="small"
                        onClick={() => handleRemoveHobby(hobby)}
                        sx={{ cursor: "pointer" }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Dialog footer */}
              <div className="py-4 px-5 space-x-5 flex justify-end border-t">
                <Button variant="outlined" autoFocus onClick={close}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant={isLoading ? "outlined" : "contained"}
                  disabled={isLoading}
                  onClick={handleSubmit}
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

export default HobbyEditModal;
