import { Button, IconButton } from "@mui/material";
import SectionSwitcher from "../builder/SectionSwitcher";
import { Close } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ManageSectionsSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        color="secondary"
        variant="outlined"
        startIcon={<TuneIcon />}
      >
        Manage Section
      </Button>
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
            className="fixed top-0 right-0 h-svh w-[350px] z-50 bg-white overflow-y-auto shadow-[rgba(0,0,0,0.1)_-8px_0px_15px] p-3"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Manage Sections</h1>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </div>
            <SectionSwitcher />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ManageSectionsSidebar;
