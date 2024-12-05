import AddTemplate from "../pages/dashboard/admin/AddTemplate";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import AllTemplates from "../pages/dashboard/admin/AllTemplates";

export const adminPath = [
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
    name: "Add Template",
    path: "addTemplate",
    element: <AddTemplate />,
  },
];
