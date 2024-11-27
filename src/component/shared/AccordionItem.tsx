import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

type TAccordionItemProps = {
  title: string;
  description: string;
};

const AccordionItem = ({ title, description }: TAccordionItemProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border-b border-neutral-300">
      <div
        onClick={() => setShow((prev) => !prev)}
        className="py-5 cursor-pointer flex justify-between items-center"
      >
        <h3 className="text-lg select-none">{title}</h3>
        <div className="text-neutral-600">
          <AddIcon
            sx={[
              { fontSize: "24px" },
              show
                ? {
                    rotate: "45deg",
                    transition: "all",
                    transitionDuration: ".2s",
                  }
                : {
                    rotate: "0deg",
                    transition: "all",
                    transitionDuration: ".2s",
                  },
            ]}
          />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <m.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <p className="pb-5 text-neutral-600 select-none">{description}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
