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
import ResumeTemplate, { TTemplate } from "../shared/ResumeTemplate";
import { useGetAllTemplatesQuery } from "../../redux/features/template/templateApi";
import { useAppSelector } from "../../redux/hooks";
import { userCurrentToken } from "../../redux/features/auth/authSlice";
import { useGetUserResumesQuery } from "../../redux/features/resume/resumeApi";
import useAuthUser from "../../hooks/useAuthUser";
import { CircularProgress } from "@mui/material";

type TChooseResumeTemplateProps = {
  label: string;
  color?: "primary" | "secondary";
  size: "small" | "large" | "medium";
  variant?: "text" | "outlined" | "contained";
  startIcon?: JSX.Element;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChooseResumeTemplate = ({
  size,
  label,
  color = "primary",
  variant = "contained",
  startIcon: StartIcon,
}: TChooseResumeTemplateProps) => {
  const navigate = useNavigate();
  const { user } = useAuthUser();
  const [open, setOpen] = useState(false);
  const { data: templatesData, isLoading: isLoadingTemplates } =
    useGetAllTemplatesQuery(null);
  const token = useAppSelector(userCurrentToken);
  const { data: resumeData, isLoading: isLoadingUsage } =
    useGetUserResumesQuery(null);

  const createdResumesCount = resumeData?.data?.length || 0;
  const resumeLimit = 10;
  const canCreate = createdResumesCount < resumeLimit;
  const remaining = resumeLimit - createdResumesCount;
  const loading = isLoadingTemplates || isLoadingUsage;

  const handleClickOpen = () => {
    if (!token) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleNavigate = () => {
    if (user?.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (user?.role === "USER") {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <CircularProgress />
      </div>
    );
  }

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
        {/* AppBar */}
        <AppBar
          elevation={0}
          sx={{
            position: "relative",
            bgcolor: "#fff",
            color: "#000",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Toolbar
            sx={{
              maxWidth: "1170px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Typography sx={{ flex: 1, fontSize: [16, 20] }}>
              Choose Resume Template
            </Typography>

            {/* Test Resume Builder Button */}
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => navigate("/templates/resume")}
              sx={{ mr: 2 }}
            >
              Test Resume Builder
            </Button>

            {/* Close Button */}
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

        {/* Usage Info */}
        <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-center text-sm font-medium">
          {canCreate ? (
            <span>
              You have created <strong>{createdResumesCount}</strong> out of{" "}
              <strong>{resumeLimit}</strong> resumes.{" "}
              <strong>{remaining}</strong> resume(s) left.
            </span>
          ) : (
            <div className="bg-yellow-50 text-yellow-800 px-4 py-3 text-center text-sm font-medium space-y-1">
              <p>
                <strong>Resume limit reached.</strong> You've created the
                maximum of <strong>{resumeLimit}</strong> resumes allowed in the
                free version.
              </p>
              <p>
                Please go to your{" "}
                <span
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={handleNavigate}
                >
                  dashboard
                </span>{" "}
                to edit your existing resumes or{" "}
                <span
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={() => navigate("/pricing")}
                >
                  upgrade to premium
                </span>{" "}
                for unlimited resume creation.
              </p>
            </div>
          )}
        </div>

        {/* Templates */}
        <div className="max-w-[1170px] w-full mx-auto px-4 pt-6 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-3">
          {templatesData?.data?.map((template: TTemplate) => (
            <ResumeTemplate
              key={template.id}
              template={template}
              canCreate={canCreate}
            />
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default ChooseResumeTemplate;
