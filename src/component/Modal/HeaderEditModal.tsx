import { DialogActions, IconButton, TextField } from "@mui/material";

import { DialogContent } from "@mui/material";

import { DialogTitle } from "@mui/material";

import { Dialog } from "@mui/material";

import { Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Fragment, useState } from "react";

import { useMediaQuery } from "@mui/material";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";

const HeaderEditModal = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle id="responsive-dialog-title">
          <div className="flex justify-between">
            <h2>Personal Info</h2>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="py-5 w-[350px] md:w-[700px] space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <TextField
                id="outlined-basic"
                label="First name"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <TextField
                id="outlined-basic"
                label="Email"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone"
                fullWidth
                variant="outlined"
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Phone"
              fullWidth
              variant="outlined"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default HeaderEditModal;
