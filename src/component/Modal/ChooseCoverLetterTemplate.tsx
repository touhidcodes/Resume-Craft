import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { userCurrentToken } from "../../redux/features/auth/authSlice";
import { useGetAllCoverLetterTemplateQuery } from "../../redux/features/template/templateApi";
import { useGetUserCoverLettersQuery } from "../../redux/features/coverLetter/coverLetterApi";
import { TTemplate } from "../shared/ResumeTemplate";
import CoverLetterNameModal from "./CoverLetterNameModal";
import useAuthUser from "../../hooks/useAuthUser";

type TChooseCoverLetterTemplateProps = {
  label: string;
  color?: "primary" | "secondary";
  size: "small" | "large" | "medium";
  variant?: "text" | "outlined" | "contained";
  startIcon?: JSX.Element;
};

const ChooseCoverLetterTemplate = ({
  label,
  size,
  color = "primary",
  variant = "contained",
  startIcon: StartIcon,
}: TChooseCoverLetterTemplateProps) => {
  const navigate = useNavigate();
  const { user } = useAuthUser();
  const [open, setOpen] = useState(false);

  const token = useAppSelector(userCurrentToken);

  const { data: templatesData, isLoading: isLoadingTemplates } =
    useGetAllCoverLetterTemplateQuery(null);
  const { data: coverLettersData, isLoading: isLoadingUsage } =
    useGetUserCoverLettersQuery(null);

  const loading = isLoadingTemplates || isLoadingUsage;
  const createdCount = coverLettersData?.data?.length || 0;
  const limit = 10;
  const canCreate = createdCount < limit;
  const remaining = limit - createdCount;

  const handleOpen = () => {
    if (!token) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleNavigateDashboard = () => {
    if (user?.role === "ADMIN") navigate("/admin/dashboard");
    else if (user?.role === "USER") navigate("/user/dashboard");
    else navigate("/login");
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
        onClick={handleOpen}
        size={size}
        variant={variant}
        color={color}
        startIcon={StartIcon}
      >
        {label}
      </Button>

      <Dialog fullScreen open={open} onClose={handleClose}>
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
              Choose Cover Letter Template
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => navigate("/templates/cover-letter")}
              sx={{ mr: 2 }}
            >
              Test Cover Letter Builder
            </Button>
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
              You have created <strong>{createdCount}</strong> out of{" "}
              <strong>{limit}</strong> cover letters.{" "}
              <strong>{remaining}</strong> cover letter(s) left.
            </span>
          ) : (
            <div className="space-y-1">
              <p>
                <strong>Cover letter limit reached.</strong> You've created the
                maximum of <strong>{limit}</strong> cover letters allowed in the
                free version.
              </p>
              <p>
                Please go to your{" "}
                <span
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={handleNavigateDashboard}
                >
                  dashboard
                </span>{" "}
                to edit existing ones or{" "}
                <span
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={() => navigate("/pricing")}
                >
                  upgrade to premium
                </span>{" "}
                for unlimited cover letter creation.
              </p>
            </div>
          )}
        </div>

        {/* Template Grid */}
        <div className="max-w-[1170px] w-full mx-auto px-4 pt-6 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-3">
          {templatesData?.data?.map((template: TTemplate) => (
            <div key={template.id} className="relative group">
              <div>
                <div className="bg-[#F4F4FF] p-5 mb-3 cursor-pointer border border-neutral-200">
                  <img
                    src={template.image}
                    alt="cover letter template"
                    className="object-center h-[240px] w-full"
                  />
                </div>
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-xs text-neutral-500">
                  ({template.usageCount}) users use this
                </p>
              </div>
              <div className="bg-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex justify-center items-center h-full px-3">
                  <CoverLetterNameModal
                    template={template}
                    disabled={!canCreate}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default ChooseCoverLetterTemplate;
