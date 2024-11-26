import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SectionSwitcher from "./SectionSwitcher";

const ManageSections = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        color="secondary"
        variant="outlined"
        startIcon={<TuneIcon />}
      >
        Manage Section
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {<DrawerList toggleDrawer={toggleDrawer} />}
      </Drawer>
    </>
  );
};

type TDrawerListProps = {
  toggleDrawer: (newOpen: boolean) => () => void;
};

const DrawerList = ({ toggleDrawer }: TDrawerListProps) => {
  return (
    <Box sx={{ width: 350, p: 3 }} role="presentation">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Manage Sections</h1>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <SectionSwitcher />
    </Box>
  );
};

export default ManageSections;
