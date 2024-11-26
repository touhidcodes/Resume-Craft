import { DialogActions, TextField } from "@mui/material";

import { DialogContent } from "@mui/material";

import { DialogTitle } from "@mui/material";

import { Dialog } from "@mui/material";

import { Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Fragment, useState } from "react";

import { useMediaQuery } from "@mui/material";
import { Edit } from "@mui/icons-material";

const HeaderModal = () => {
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
      <div onClick={handleClickOpen}>
        <Edit />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Personal Info"}
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col md:flex-row py-5 gap-5 w-[350px]  md:w-[700px] ">
            <div className="flex flex-col gap-y-[20px] w-[50%]">
              <TextField
                id="outlined-basic"
                label="First name"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-5 w-[50%]">
              <TextField
                id="outlined-basic"
                label="Last name"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                fullWidth
                label="Phone number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                fullWidth
                label="Location"
                variant="outlined"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
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

export default HeaderModal;
