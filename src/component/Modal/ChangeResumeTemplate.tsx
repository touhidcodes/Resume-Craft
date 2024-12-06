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
import { useNavigate } from "react-router-dom";
import { TTemplate } from "../shared/ResumeTemplate";
import { useGetAllTemplatesQuery } from "../../redux/features/template/templateApi";
import { useUpdateResumeMutation } from "../../redux/features/resume/resumeApi";
import { useAppSelector } from "../../redux/hooks";

type TChooseResumeTemplateProps = {
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

const ChangeResumeTemplate = ({
  size,
  label,
  color = "primary",
  variant = "contained",
  startIcon: StartIcon,
}: TChooseResumeTemplateProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const resumeId = useAppSelector((state) => state.resume.resume?.id);
  const { data, isLoading } = useGetAllTemplatesQuery(null);
  const [changeResume] = useUpdateResumeMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeResume = async (templateId: string) => {
    try {
      const payload = { id: resumeId, data: { templateId } };
      const res = await changeResume(payload).unwrap();

      if (res.success) {
        navigate(
          `/resume-builder/${res.data.templateId}?resume=${res.data.id}`
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
    }
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
              Choose Resume Template
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
          {data?.data?.map((template: TTemplate) => (
            <div key={template.id} className="relative group">
              <div className="bg-white p-2.5 mb-3 cursor-pointer border border-neutral-200">
                <img
                  src={template.image}
                  alt="user's resume"
                  className="object-center h-[260px]"
                />
              </div>
              <div className="w-full flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:transition-all group-hover:duration-300 scale-95">
                <Button
                  onClick={() => handleChangeResume(template.id)}
                  variant="contained"
                  size="small"
                  sx={{ fontSize: [10, 14] }}
                >
                  Use This Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default ChangeResumeTemplate;
