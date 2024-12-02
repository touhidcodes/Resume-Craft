import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import MultipleSelect from "../../builder/MultipleSelect";
import ResumeEditBtn from "../../shared/ResumeEditBtn";
import { Skill } from "../../../types/resumeTypes";
import { useUpdateSkillMutation } from "../../../redux/features/resume/resumeApi";
import { toast } from "sonner";
import ButtonSpinner from "../../shared/ButtonSpinner";

type TSkillModalProps = {
  skill: Skill;
};

const SkillEditModal = ({ skill }: TSkillModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(skill.category);
  const [skills, setSkills] = useState<string[]>(skill.skills);
  const [updateSkill, { isLoading }] = useUpdateSkillMutation();

  const handleRemoveSkill = (skill: string) => {
    const isSkillAlreadyExist = skills.find((sk) => sk === skill);

    if (!isSkillAlreadyExist) {
    }
    const filteredSkills = skills.filter((item) => item !== skill);
    setSkills(filteredSkills);
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleUpdateSkill = async () => {
    try {
      const res = await updateSkill({
        id: skill.id,
        data: { category, skills },
      }).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
      close();
    } catch (error) {
      console.log(error);
    }
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
                <h3 className="text-xl font-semibold">Skills</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="p-5 col-span-7 space-y-5">
                    <h2>What are your stand-out skills?</h2>
                    <div>
                      <p className="mb-3">
                        Category <span className="text-red-500">*</span>
                      </p>
                      <TextField
                        id="outlined-basic"
                        label="Category"
                        fullWidth
                        variant="outlined"
                        defaultValue={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                    <MultipleSelect
                      placeholder="Type you skill and press enter..."
                      label="Skills"
                      value={skills}
                      setValue={setSkills}
                    />
                    <div className="mt-5 flex items-center gap-4 flex-wrap">
                      {skills.map((skill, index) => (
                        <button
                          key={skill + index}
                          className="flex items-center gap-x-3 text-xs border rounded-md py-1.5 px-3 cursor-default"
                        >
                          <span>{skill}</span>
                          <Close
                            fontSize="small"
                            onClick={() => handleRemoveSkill(skill)}
                            sx={{ cursor: "pointer" }}
                          />
                        </button>
                      ))}
                    </div>
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
                  variant={isLoading ? "outlined" : "contained"}
                  disabled={isLoading}
                  color="primary"
                  onClick={handleUpdateSkill}
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

export default SkillEditModal;
