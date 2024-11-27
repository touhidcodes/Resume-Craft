import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import TextEditor from "../shared/TextEditor";
import { Button } from "@mui/material";

const SummaryEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState("");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

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
                <h3 className="text-xl font-semibold">Summary</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5">
                    <p className="mb-3 font-medium">
                      How can you describe yourself?
                    </p>
                    <TextEditor value={summary} setValue={setSummary} />
                  </div>
                  <div className="p-5 bg-primary/[0.03] hidden md:block">
                    <h2 className="text-lg font-semibold">Tips</h2>
                    <div className="text-sm mt-5">
                      <p>
                        A summation of relevant professional abilities,
                        accomplishments, and personal qualities that make you
                        the right candidate for the job. Be sure to give your
                        potential employer a relevant snapshot of who you are
                        and what you can offer. Tailor it to the position you're
                        applying for, focusing on the most relevant
                        qualifications for the job.
                      </p>
                      <ul className="list-disc space-y-3 mt-8 pl-3">
                        <li>
                          The Summary should appear at the beginning of your
                          resume.
                        </li>
                        <li>
                          If you're having a difficult time, spend some time
                          putting together the rest of your resume first.
                        </li>
                        <li>
                          The Summary Section is a great spot to include why you
                          are a quality candidate.
                        </li>
                      </ul>
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
                  //   onClick={handleClose}
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

export default SummaryEditModal;
