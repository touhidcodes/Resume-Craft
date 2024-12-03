import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import template from "../../../assets/admin/resume-and-cv.png";
import popular from "../../../assets/admin/cv (1).png";
import users from "../../../assets/admin/team.png";
import { Helmet } from "react-helmet-async";
import { useGetAllTemplatesQuery } from "../../../redux/api/adminApi";
import { useGetAllUsersQuery } from "../../../redux/api/userApi";

// Sample Data for the Chart
const revenueChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [20000, 30000, 25000, 35000, 28000, 50000, 30000, 40000, 37000, 45000, 42000, 46000],
      backgroundColor: "#cbd5e1",
      borderRadius: 4,
      hoverBackgroundColor: "#879fff",
    },
  ],
};

// Sample Data for Last 5 User Logins
const userLogins = [
  { name: "Alice Johnson", email: "alice@example.com", time: "2024-11-24 10:45 AM" },
  { name: "Bob Smith", email: "bob@example.com", time: "2024-11-24 09:30 AM" },
  { name: "Charlie Brown", email: "charlie@example.com", time: "2024-11-23 05:15 PM" },
  { name: "Diana Prince", email: "diana@example.com", time: "2024-11-23 03:50 PM" },
  { name: "Evan Wright", email: "evan@example.com", time: "2024-11-23 12:10 PM" },
];


const AdminDashboard = () => {

  const { data: allTemplates } = useGetAllTemplatesQuery("")
  const { data: allUsers } = useGetAllUsersQuery("")
  console.log(allUsers)

  // console.log(allTemplates?.data?.length)
  const totalTemplates = allTemplates?.data?.length;

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
            {
              title: "Total Templates",
              value: totalTemplates,
              image: template,
            },
            {
              title: "Total Users",
              value: "9,801",
              image: users,
            },
            {
              title: "Popular Templates",
              value: totalTemplates,
              image: popular,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 shadow-md rounded-lg flex flex-col hover:bg-[#879fff] hover:text-white transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full">
                  <img src={stat.image} alt={stat.title} className="h-12 w-12 object-cover" /> {/* Image as icon */}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold my-2">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Chart Section */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Monthly Resume Creation</h3>
              <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-600 mt-2 md:mt-0">
                <option value="This Year">This Year</option>
                <option value="This Month">This Month</option>
              </select>
            </div>
            <div className="mt-4">
              <Bar
                data={revenueChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Last 5 User Logins Table */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Last 5 User Logins</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 bg-white">
                  <th className="border-b-2 border-gray-200 p-3 text-left text-gray-600">Name</th>
                  <th className="border-b-2 border-gray-200 p-3 text-left text-gray-600">Email</th>
                  <th className="border-b-2 border-gray-200 p-3 text-left text-gray-600">Login Time</th>
                </tr>
              </thead>
              <tbody>
                {userLogins.map((user, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-[#879fff] hover:text-white transition-all duration-200`}
                  >
                    <td className="border-b-2 border-gray-200 p-3">{user.name}</td>
                    <td className="border-b-2 border-gray-200 p-3">{user.email}</td>
                    <td className="border-b-2 border-gray-200 p-3">{user.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/4 flex flex-col gap-6">
        {[
          {
            title: "Team Review",
            desc: "Oxish Project Team is built for every user of your project team to plan, manage.",
            date: "14th Oct",
            members: ["A", "B", "C"], // Placeholder for avatars
          },
          {
            title: "Meeting",
            desc: "Upcoming Event Planning Discussion",
            date: "16th Oct",
            time: "11:00 - 12:00",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col"
          >
            <h3 className="text-lg font-medium text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{card.desc}</p>
            {card.members && (
              <div className="flex items-center mt-4 space-x-2">
                {card.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm"
                  >
                    {member}
                  </div>
                ))}
              </div>
            )}
            {card.date && (
              <p className="text-sm text-gray-600 mt-4">
                {card.date} {card.time && `| ${card.time}`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
