import React, { useState } from "react";
import teamImage from "../../../assets/images/t.jpeg";

const UserProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6">
        <h1 className="text-xl font-bold mb-6">My Profile</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            >
              {menuOpen ? "Close Menu" : "Open Menu"}
            </button>
            <ul
              className={`rounded-lg divide-y lg:block ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              {[
                "My Profile",
                "Security",
                "Teams",
                "Team Member",
                "Notification",
                "Billing",
                "Data Export",
                "Delete Account",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`p-4 cursor-pointer ${
                    index === 0
                      ? "bg-white font-semibold"
                      : "hover:text-[#879fff] hover:bg-gray-100 hover:font-semibold"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Details */}
          <div className="w-full lg:w-3/4 space-y-6">
            {/* User Info */}
            <div className="bg-gray-50 p-4 md:p-6 shadow-md rounded-lg flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={teamImage}
                  alt="Profile"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">Jack Adams</h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Product Designer
                  </p>
                  <p className="text-gray-500 text-sm md:text-base">
                    Los Angeles, California, USA
                  </p>
                </div>
              </div>
              <button className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-100 mt-4 lg:mt-0">
                Edit
              </button>
            </div>

            {/* Personal Information */}
            <div className="bg-white p-4 md:p-6 shadow-md rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Personal Information</h3>
                <button className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-100">
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">First Name</p>
                  <p className="text-gray-800 font-medium">Jack</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Name</p>
                  <p className="text-gray-800 font-medium">Adams</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="text-gray-800 font-medium">jackadams@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-gray-800 font-medium">(213) 555-1234</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Bio</p>
                  <p className="text-gray-800 font-medium">Product Designer</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-4 md:p-6 shadow-md rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Address</h3>
                <button className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-100">
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="text-gray-800 font-medium">
                    United States of America
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City/State</p>
                  <p className="text-gray-800 font-medium">California, USA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Postal Code</p>
                  <p className="text-gray-800 font-medium">ERT 62574</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">TAX ID</p>
                  <p className="text-gray-800 font-medium">AS564178969</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
