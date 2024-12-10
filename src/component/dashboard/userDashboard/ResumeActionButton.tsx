import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { MouseEvent, useState } from "react";
import { IconButton } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  useCreateResumeMutation,
  useDeleteUserResumeMutation,
} from "../../../redux/features/resume/resumeApi";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

const ResumeActionButton = ({
  id,
  template,
}: {
  id: string;
  template: { id: string };
}) => {
  const [deleteTemplate] = useDeleteUserResumeMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [createResume] = useCreateResumeMutation();
  const navigate = useNavigate();
  console.log(template);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDuplicate = async () => {
    try {
      const defaultResumeName = `Copy of Resume ${template.id}`; // Generate a default name
      const response = await createResume({
        templateId: template.id,
        name: defaultResumeName,
      }).unwrap();

      toast.success("Resume duplicated successfully!");
      navigate(
        `/resume-builder/${response.data.templateId}?resume=${response.data.id}`
      );
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to duplicate the resume.");
    } finally {
      handleClose();
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTemplate(id).unwrap();
      toast.success("resume deleted successfully!");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to delete template.");
    } finally {
      handleClose();
    }
  };

  const handleEdit = () => {
    navigate(`/resume-builder/${template.id}?resume=${id}`);
  };

  return (
    <div>
      <IconButton
        id="action-button"
        aria-controls={open ? "action-button" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertOutlinedIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit} disableRipple>
          <EditIcon sx={{ color: "blue" }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDuplicate} disableRipple>
          <FileCopyIcon sx={{ color: "#1976d2" }} />
          Duplicate
        </MenuItem>
        <MenuItem onClick={handleDelete} disableRipple>
          <DeleteIcon sx={{ color: "red" }} />
          Delete
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default ResumeActionButton;
