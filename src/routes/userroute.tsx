import AllResumes from "../pages/dashboard/user/AllResumes";
import UserDashboard from "../pages/dashboard/user/UserDashboard";
import UserProfile from "../pages/dashboard/user/UserProfile";

export const UserPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Resumes",
    path: "resumes",
    element: <AllResumes />,
  },
  {
    name: "Profile",
    path: "user-profile",
    element: <UserProfile />,
  },
];
