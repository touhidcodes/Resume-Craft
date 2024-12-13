import AddCoverLetter from "../pages/dashboard/admin/AddCoverLetter";
import AddTemplate from "../pages/dashboard/admin/AddTemplate";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import AllTemplates from "../pages/dashboard/admin/AllTemplates";

export const AdminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "All Templates",
    path: "allTemplates",
    element: <AllTemplates />,
  },
  {
    name: "Add Resume",
    path: "addTemplate",
    element: <AddTemplate />,
  },
  {
    name: "Add Cover Letter",
    path: "addCoverLetter",
    element: <AddCoverLetter />,
  },
];
