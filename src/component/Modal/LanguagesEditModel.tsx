import { DialogTitle } from "@mui/material";
import { DialogActions, FormControl } from "@mui/material";

import { DialogContent } from "@mui/material";

import { Dialog } from "@mui/material";

import { Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Fragment, useState } from "react";

import { useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
import MultipleSelect from "../builder/MultipleSelect";
import ResumeEditBtn from "../shared/ResumeEditBtn";

const LanguagesEditModel = () => {
  const theme = useTheme();
  const [languages, setLanguages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveLanguage = (language: string) => {
    const filteredLanguages = languages.filter((item) => item !== language);
    setLanguages(filteredLanguages);
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
        <DialogTitle id="responsive-dialog-title">{"Langaues"}</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, width: 500 }}>
            <MultipleSelect label="Select Language" setValue={setLanguages} />
          </FormControl>
          <div className="mt-5 flex items-center gap-4 flex-wrap">
            {languages.map((language) => (
              <button className="flex items-center gap-x-3 text-sm border rounded-md py-1.5 px-3 cursor-default">
                <span>{language}</span>
                <Close
                  fontSize="small"
                  onClick={() => handleRemoveLanguage(language)}
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

export default LanguagesEditModel;
