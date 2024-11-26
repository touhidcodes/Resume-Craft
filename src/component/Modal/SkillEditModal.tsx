import { DialogActions, FormControl } from "@mui/material";

import { DialogContent } from "@mui/material";

import { DialogTitle } from "@mui/material";

import { Dialog } from "@mui/material";

import { Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Fragment, useState } from "react";

import { useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import MultipleSelect from "../builder/MultipleSelect";

const SkillEditModal = () => {
  const theme = useTheme();
  const [skills, setSkills] = useState<string[]>(["JS"]);
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveSkill = (skill: string) => {
    const filteredSkills = skills.filter((item) => item !== skill);
    setSkills(filteredSkills);
  };

  return (
    <Fragment>
      <ResumeEditBtn handleClick={handleClickOpen} />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Skills</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, width: 500 }}>
            <MultipleSelect label="Select Skills" setValue={setSkills} />
          </FormControl>
          <div className="mt-5 flex items-center gap-4 flex-wrap">
            {skills.map((skill) => (
              <button className="flex items-center gap-x-3 text-sm border rounded-md py-1.5 px-3 cursor-default">
                <span>{skill}</span>
                <Close
                  fontSize="small"
                  onClick={() => handleRemoveSkill(skill)}
                  sx={{ cursor: "pointer" }}
                />
              </button>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default SkillEditModal;
