import {
  MenuItem,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Theme,
  OutlinedInput,
  Chip,
  Box,
} from "@mui/material";

import { DialogContent } from "@mui/material";

import { DialogTitle } from "@mui/material";

import { Dialog } from "@mui/material";

import { Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Fragment, useState } from "react";

import { useMediaQuery } from "@mui/material";
import { Edit } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const CertifiageModal = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [personName, setPersonName] = useState<string[]>([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
        <DialogTitle id="responsive-dialog-title">{"Certificates"}</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-chip-label">Certifite</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
export default CertifiageModal;
