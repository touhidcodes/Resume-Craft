import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FormEvent, useState } from "react";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

type TFormData = {
  name: string;
  proficiency: string;
};

const LanguageEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const languages = useAppSelector((state) => state.resume.resume.language);
  const [formData, setFormData] = useState<TFormData[]>(languages);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleInputChange = (
    index: number,
    field: "name" | "proficiency",
    value: string
  ): void => {
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      ...updatedFormData[index],
      [field]: value,
    };
    setFormData(updatedFormData);
  };

  console.log(formData);

  // Handle form submission
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    // Dispatch the action to update the languages in Redux state
    // dispatch(
    //   updateLanguages(
    //     formData.map((lang, index) => ({
    //       name: lang.name,
    //       proficiency: lang.proficiency,
    //       index,
    //     }))
    //   )
    // );
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
                <h3 className="text-xl font-semibold">Languages</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="p-5 col-span-7">
                    <form className="space-y-5">
                      {languages.map((language, index) => (
                        <div
                          key={language.name}
                          className="flex flex-col items-center md:flex-row gap-5 mt-1"
                        >
                          <div className="w-full md:w-1/2">
                            <p className="mb-3">
                              Language <span className="text-red-500">*</span>
                            </p>
                            <TextField
                              id={language.name}
                              label="Language"
                              defaultValue={language.name}
                              fullWidth
                              variant="outlined"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <p className="mb-3">
                              Proficiency{" "}
                              <span className="text-red-500">*</span>
                            </p>

                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-helper-label">
                                Proficiency
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Proficiency"
                                defaultValue={language.proficiency}
                                onChange={(e) =>
                                  handleInputChange(
                                    index,
                                    "proficiency",
                                    e.target.value
                                  )
                                }
                              >
                                <MenuItem value="Native">Native</MenuItem>
                                <MenuItem value="Fluent">Fluent</MenuItem>
                                <MenuItem value="Comfortable">
                                  Comfortable
                                </MenuItem>
                                <MenuItem value="Intermediate">
                                  Intermediate
                                </MenuItem>
                                <MenuItem value="Beginner">Beginner</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      ))}
                    </form>
                  </div>
                  <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
                    <h2 className="text-lg font-semibold">Tips</h2>
                    <div className="text-sm mt-5">
                      <p>
                        You've got the skills and this is the place to show them
                        off. This two or three column section uses bullet points
                        to highlight the qualities that set you apart. List your
                        special, work-related, talents in short, 2-3 word
                        phrases and leave the punctuation at the door.
                      </p>
                      <ul className="list-disc space-y-3 mt-8 pl-3">
                        <li>
                          Punctuation in your skills section is overrated. Your
                          bullet points will look much better without periods or
                          exclamation marks.
                        </li>
                        <li>
                          If you’re short on skills relevant to the given
                          position, try listing skills and personal
                          characteristics that are transferable to just about
                          any position such as consensus building,
                          cross-functional collaboration, or project management.
                        </li>
                        <li>
                          For inspiration turn to the job description that
                          you’re applying for. Employers will often highlight
                          key characteristics they’d like in their ideal
                          employee.
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

export default LanguageEditModal;
