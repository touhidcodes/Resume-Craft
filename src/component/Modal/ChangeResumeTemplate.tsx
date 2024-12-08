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
import ButtonSpinner from "../shared/ButtonSpinner";
import { BuildTwoTone, Done } from "@mui/icons-material";

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
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetAllTemplatesQuery(null);

  const handleClickOpen = () => {
    setOpen(true);
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
        sx={{ bgcolor: "#ffff" }}
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
            <ResumeTemplate
              key={template.id}
              onClose={handleClose}
              template={template}
            />
          ))}
        </div>
      </Dialog>
    </>
  );
};

type ResumeTemplateProps = {
  template: TTemplate;
  onClose: () => void;
};

const ResumeTemplate = ({ template, onClose }: ResumeTemplateProps) => {
  const navigate = useNavigate();
  const resumeId = useAppSelector((state) => state.resume.resume?.id);
  const templateId = useAppSelector((state) => state.resume.resume?.templateId);
  const [changeResume, { isLoading }] = useUpdateResumeMutation();

  const handleChangeResume = async (id: string) => {
    if (templateId === id) return;

    try {
      const payload = { id: resumeId, data: { templateId: id } };
      const res = await changeResume(payload).unwrap();

      if (res.success) {
        navigate(
          `/resume-builder/${res.data.templateId}?resume=${res.data.id}`
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  return (
    <div
      onClick={() => handleChangeResume(template.id)}
      key={template.id}
      className="relative cursor-pointer"
    >
      <div className="bg-white p-2.5 cursor-pointer border border-neutral-200">
        <img
          src={template.image}
          alt="user's resume"
          className="object-center h-[260px]"
        />
      </div>
      <div className="bg-transparent absolute inset-0 group">
        <div className="flex justify-center items-center h-full px-3">
          {templateId === template.id ? (
            <div className="bg-primary size-12 text-white rounded-full flex justify-center items-center">
              <Done sx={{ fontSize: "900" }} />
            </div>
          ) : (
            <div className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button
                variant={isLoading ? "outlined" : "contained"}
                size="small"
                fullWidth
                sx={{ fontSize: [10, 14] }}
              >
                {isLoading ? <ButtonSpinner /> : "Use This Template"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangeResumeTemplate;
