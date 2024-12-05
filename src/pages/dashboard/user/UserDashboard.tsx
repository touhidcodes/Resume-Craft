import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import UserResumes from "../../../component/dashboard/userDashboard/UserResumes";
import { Helmet } from "react-helmet-async";
import { useGetUserProfileQuery } from "../../../redux/features/user/userApi";
import { CircularProgress } from "@mui/material";

const UserDashboard = () => {
  const { data: usersData, isLoading } = useGetUserProfileQuery("");

  if (isLoading) {
    <div className="flex justify-center items-center h-64">
      <CircularProgress />
    </div>
  }
  return (
    <div className="space-y-8">
      <Helmet>
        <title>User Dashboard - Resume Craft</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Hey, {usersData?.data?.userName} !</h2>
          <p className="text-neutral-500">What do you want to create.</p>
        </div>
        <div className="custom border flex items-center gap-x-5 p-2 cursor-pointer">
          <DescriptionOutlinedIcon color="primary" sx={{ fontSize: "28px" }} />
          <div>
            <h3 className="text-lg font-medium">Resume</h3>
            <p className="text-sm text-neutral-500">Better resume builder</p>
          </div>
        </div>
        <div className="custom border flex items-center gap-x-5 p-2 cursor-pointer">
          <FileCopyOutlinedIcon sx={{ fontSize: "28px", color: "#7d60f4" }} />
          <div>
            <h3 className="text-lg font-medium">Cover Letter</h3>
            <p className="text-sm text-neutral-500">Better resume builder</p>
          </div>
        </div>
        <div className="custom border flex items-center gap-x-5 p-2 cursor-pointer">
          <ArticleOutlinedIcon sx={{ fontSize: "28px", color: "#0FAC1C" }} />
          <div>
            <h3 className="text-lg font-medium">Resign Letter</h3>
            <p className="text-sm text-neutral-500">Better resume builder</p>
          </div>
        </div>
      </div>

      <UserResumes />
    </div>
  );
};

export default UserDashboard;
