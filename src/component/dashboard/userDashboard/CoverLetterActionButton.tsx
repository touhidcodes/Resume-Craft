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
  useCreateCoverLetterDuplicateMutation,
  useDeleteUserCoverLettersMutation,
} from "../../../redux/features/coverLetter/coverLetterApi";

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

const CoverLetterActionButton = ({
  id,
  coverLetterId,
}: {
  id: string;
  coverLetterId: string;
}) => {
  const [deleteCoverLetter] = useDeleteUserCoverLettersMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [CoverLetterDuplicate] = useCreateCoverLetterDuplicateMutation();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDuplicate = async () => {
    try {
      const response = await CoverLetterDuplicate(coverLetterId).unwrap();

      toast.success("Cover Letter duplicated successfully!");
      navigate(
        `/cover-letter-builder/${response.data.templateId}?cl=${response.data.id}`
      );
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failed to duplicate the Cover Letter."
      );
    } finally {
      handleClose();
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCoverLetter(coverLetterId).unwrap();
      toast.success("Cover Letter deleted successfully!");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to delete Cover Letter.");
    } finally {
      handleClose();
    }
  };

  const handleEdit = () => {
    navigate(`/cover-letter-builder/${id}?cl=${coverLetterId}`);
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

export default CoverLetterActionButton;
