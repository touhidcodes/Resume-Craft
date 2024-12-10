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
import { TTemplate } from "../shared/ResumeTemplate";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { useGetAllCoverLetterTemplateQuery } from "../../redux/features/template/templateApi";
import ButtonSpinner from "../shared/ButtonSpinner";
import { useAppSelector } from "../../redux/hooks";
import { Done } from "@mui/icons-material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChangeCoverLetterTemplate = () => {
  const [open, setOpen] = useState(false);
  const templateId = useAppSelector(
    (state) => state.coverLetter.coverLetter?.templateId
  );
  const { data, isLoading } = useGetAllCoverLetterTemplateQuery(null);

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
        variant="outlined"
        color="secondary"
        startIcon={<GridViewOutlinedIcon />}
      >
        Change Template
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
            <div key={template.id} className="relative group">
              <div>
                <div className="bg-[#F4F4FF] p-5 mb-3 cursor-pointer border border-neutral-200">
                  <img
                    src={template.image}
                    alt="user's resume"
                    className="object-center h-[240px]"
                  />
                </div>
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-xs text-neutral-500">
                  ({template.usageCount}) users use this
                </p>
              </div>
              <div className="bg-transparent absolute inset-0">
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
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default ChangeCoverLetterTemplate;
