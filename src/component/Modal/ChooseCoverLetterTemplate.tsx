import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, Ref, useState } from "react";
import ResumeTemplate, { TTemplate } from "../shared/ResumeTemplate";
import { useGetAllCoverLetterTemplateQuery } from "../../redux/features/template/templateApi";

type TChooseCoverLetterTemplateProps = {
  label: string;
  color?: "primary" | "secondary";
  size: "small" | "large" | "medium";
  variant?: "text" | "outlined" | "contained";
  startIcon?: JSX.Element;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChooseCoverLetterTemplate = ({
  size,
  label,
  color = "primary",
  variant = "contained",
  startIcon: StartIcon,
}: TChooseCoverLetterTemplateProps) => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetAllCoverLetterTemplateQuery(null);

  const handleClickOpen = () => {
    setOpen(true);
    // if (!token) {
    //   navigate("/login");
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) return;

  return (
    <>
      <Button
        onClick={handleClickOpen}
        size={size}
        variant={variant}
        color={color}
        startIcon={StartIcon}
      >
        {label}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          elevation={0}
          sx={{
            position: "relative",
            bgcolor: "#fff",
            color: "#000",
            borderBottom: "1px solid #ddd",
            pr: 0,
          }}
        >
          <Toolbar
            sx={{
              maxWidth: "1170px",
              width: "100%",
              margin: "0 auto",
              pr: 0,
            }}
          >
            <Typography
              sx={{ flex: 1, fontSize: [16, 20] }}
              variant="h6"
              component="div"
            >
              Choose Cover Letter Template
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <div className="max-w-[1170px] w-full mx-auto px-4 pt-6 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-3">
          {/* <div
            // onClick={() => handleCreateResume("/resume-builder/custom")}
            className="bg-white p-5 mb-3 cursor-pointer border border-neutral-200 flex flex-col justify-center items-center text-muted"
          >
            <AddIcon sx={{ fontSize: 50 }} />
            <h5>Create New</h5>
          </div> */}
          {data?.data?.map((template: TTemplate) => (
            <ResumeTemplate key={template.id} template={template} />
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default ChooseCoverLetterTemplate;
