import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { adminPath } from "../../routes/adminroute";
import { userPath } from "../../routes/userroute";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { userCurrentUser } from "../../redux/features/auth/authSlice";

type Open = {
  open: boolean;
};

const SideBar = ({ open }: Open) => {
  const userRole = {
    ADMIN: "ADMIN",
    USER: "USER",
  };

  // let user = useAppSelector(userCurrentUser);
  let user = { role: "USER" };
  let sidebarItem;
  switch (user.role) {
    case userRole.ADMIN:
      sidebarItem = adminPath;
      break;
    case userRole.USER:
      sidebarItem = userPath;
      break;
    default:
      break;
  }

  return (
    <List>
      {sidebarItem?.map((text, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <Link to={`${text.path}`}>
            {" "}
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
