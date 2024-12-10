import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { userCurrentUser, logout } from "../../redux/features/auth/authSlice";
import { AdminPath } from "../../routes/AdminRoute";
import { UserPath } from "../../routes/UserRoute";

type Open = {
  open: boolean;
};

const SideBar = ({ open }: Open) => {
  const userRole = {
    ADMIN: "ADMIN",
    USER: "USER",
  };

  const user = useAppSelector(userCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  let sidebarItem: any[];
  switch (user.role) {
    case userRole.ADMIN:
      sidebarItem = AdminPath;
      break;
    case userRole.USER:
      sidebarItem = UserPath;
      break;
    default:
      sidebarItem = [];
      break;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      {/* Main Menu Items */}
      <List>
        {sidebarItem?.map((text, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link to={`${text.path}`}>
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

      {/* Logout Button */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleLogout}
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
              <ExitToAppIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={[
                open
                  ? {
                      opacity: 1,
                      color: "red",
                    }
                  : {
                      opacity: 0,
                    },
              ]}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
