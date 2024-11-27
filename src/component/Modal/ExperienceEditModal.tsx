import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import TextEditor from "../shared/TextEditor";

const ExperienceEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [experience, setExperience] = useState("");

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
                <h3 className="text-xl font-semibold">Experience</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="p-5 col-span-7 space-y-5">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Employer</p>
                        <TextField
                          id="outlined-basic"
                          label="Company A"
                          fullWidth
                          variant="outlined"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="mb-3">Role or job title</p>
                        <TextField
                          id="outlined-basic"
                          label="Frontend Developer"
                          fullWidth
                          variant="outlined"
                        />
                      </div>
                    </div>

                    <div>
                      <p>Start date and end date</p>
                      <div className="flex flex-col md:flex-row gap-5 mt-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="End Date"
                              views={["month", "year"]}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="End Date"
                              views={["month", "year"]}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3">Location</p>
                      <TextField
                        id="outlined-basic"
                        label="City, state"
                        fullWidth
                        variant="outlined"
                      />
                    </div>

                    <div>
                      <p className="font-medium mb-3">
                        What were your responsibilities and accomplishments?
                      </p>
                      <TextEditor value={experience} setValue={setExperience} />
                    </div>
                  </div>
                  <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
                    <h2 className="text-lg font-semibold">Tips</h2>
                    <div className="text-sm mt-5 space-y-6">
                      <p>
                        The difference is in the details. More than 80% of
                        employers think that a phone number must always be
                        present on a resume.* Make sure that you add your
                        contact information so that employers can contact you
                        for a job interview!
                      </p>
                      <p>
                        Employers usually want to know the city and state you
                        currently live in, even if you plan to move soon. If
                        you’re applying for a position that is located far away,
                        share a little about why you’re applying in your cover
                        letter to help the employer better understand why you’re
                        still a great fit for the job.
                      </p>
                      <p>
                        *Indeed survey conducted with Lucid, N=2661 employers
                        among 10 industries.
                      </p>
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

export default ExperienceEditModal;
