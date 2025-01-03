/* eslint-disable @typescript-eslint/no-explicit-any */
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import template from "../../../assets/admin/resume-and-cv.png";
import popular from "../../../assets/admin/cv (1).png";
import users from "../../../assets/admin/team.png";
import { Helmet } from "react-helmet-async";
import { useGetAllCoverLetterTemplateQuery, useGetAllTemplatesQuery } from "../../../redux/features/template/templateApi";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import { useGetAllAnalyticsQuery } from "../../../redux/features/admin/adminApi";

const AdminDashboard = () => {
  const { data: analytics } = useGetAllAnalyticsQuery("");
  const { data: allResumes } = useGetAllTemplatesQuery("");
  const { data: allCoverLetters } = useGetAllCoverLetterTemplateQuery("");
  const { data: allUsers } = useGetAllUsersQuery("");

  const totalResumes = allResumes?.data?.length ?? 0;
  const totalCoverLetters = allCoverLetters?.data?.length ?? 0;
  const totalTemplates = totalResumes + totalCoverLetters;
  const popularTemplates = analytics?.data?.popularTemplates || [];
  const totalUsers = allUsers?.data?.length ?? 0;

  const monthlyResumeData = analytics?.data?.monthlyResumeCount || [];
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const resumeCounts = Array(12).fill(0);

  const populateResumeCounts = (data: any[]) => {
    data.forEach(({ month, count }: any) => {
      const [, monthIndex] = month.split("-").map(Number);
      if (!isNaN(monthIndex) && monthIndex >= 1 && monthIndex <= 12) {
        resumeCounts[monthIndex - 1] = count;
      }
    });
  };

  populateResumeCounts(monthlyResumeData);

  const revenueChartData = {
    labels,
    datasets: [
      {
        label: "Resumes Created",
        data: resumeCounts,
        backgroundColor: "#cbd5e1",
        borderRadius: 4,
        hoverBackgroundColor: "#879fff",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col lg:flex-row gap-6">
      <Helmet>
        <title>Admin Dashboard - Resume Craft</title>
      </Helmet>

      {/* Left Section */}
      <div className="w-full lg:w-3/4 flex flex-col gap-6">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Total Templates", value: totalTemplates, image: template },
            { title: "Total Users", value: totalUsers, image: users },
            { title: "Popular Templates", value: popularTemplates.length, image: popular },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 shadow-md rounded-lg flex flex-col items-start hover:bg-[#879fff] hover:text-white transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <img src={stat.image} alt={stat.title} className="h-10 w-10 object-cover" />
                <div>
                  <h3 className="text-sm md:text-base font-medium">{stat.title}</h3>
                  <p className="text-lg md:text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Monthly Resume Creation
          </h3>
          <div className="mt-4">
            <Bar
              data={revenueChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
              height={200}
            />
          </div>
        </div>

        {/* Last 5 User Logins Table */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Last 5 User Logins
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b p-3 text-left">Name</th>
                <th className="border-b p-3 text-left">Email</th>
                <th className="border-b p-3 text-left">Login Time</th>
              </tr>
            </thead>
            <tbody>
              {analytics?.data?.lastFiveUsers?.map((user: any, index: any) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-[#879fff] hover:text-white`}
                >
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    {new Date(user.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-4 md:p-6">
        <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
          Popular Resume Templates
        </h3>
        <div className="flex flex-col space-y-4">
          {popularTemplates.map((template: any) => (
            <div key={template.id} className="flex flex-col items-center">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <h4 className="text-base font-medium mt-2">{template.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
