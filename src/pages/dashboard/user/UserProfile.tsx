import React, { useState, useEffect } from "react";
import teamImage from "../../../assets/images/t.jpeg";
import { Helmet } from "react-helmet-async";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";

const UserProfile = () => {
  const { data: usersData, isLoading, isError } = useGetAllUsersQuery("");
  console.log(usersData?.data)

  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const defaultUserInfo = {
    userName: "Jack",
    email: "jackadams@gmail.com",
    phone: "(213) 555-1234",
    bio: "Product Designer",
    country: "United States of America",
    city: "California, USA",
  };

  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  // Update userInfo state when API data is available
  useEffect(() => {
    if (usersData?.data) {
      const user = usersData.data; // Assuming the first user is the profile user
      setUserInfo({
        userName: user?.userName || defaultUserInfo.userName,
        email: user?.email || defaultUserInfo.email,
        phone: user?.phone || defaultUserInfo.phone,
        bio: user?.bio || defaultUserInfo.bio,
        country: user?.country || defaultUserInfo.country,
        city: user?.city || defaultUserInfo.city,
      });
    }
  }, [usersData]);

  // Handle input change for fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>User Profile - Resume Craft</title>
      </Helmet>

      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl font-bold mb-6">My Profile</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full space-y-6">
            {/* User Info */}
            <div className="bg-gray-50 p-4 md:p-6 shadow-md rounded-lg flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={teamImage}
                  alt="Profile"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{`${userInfo.userName}`}</h3>
                  <p className="text-gray-500 text-sm md:text-base">{userInfo.bio}</p>
                  <p className="text-gray-500 text-sm md:text-base">{userInfo.city}</p>
                </div>
              </div>
              <button
                className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-100 mt-4 lg:mt-0"
                onClick={() => setIsEditingPersonalInfo(!isEditingPersonalInfo)}
              >
                {isEditingPersonalInfo ? "Save" : "Edit"}
              </button>
            </div>

            {/* Personal Information */}
            <div className="bg-white p-4 md:p-6 shadow-md rounded-lg space-y-4">
              <h3 className="font-bold text-gray-800">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(
                  Object.entries({
                    userName: "Full Name",
                    email: "Email Address",
                    phone: "Phone",
                    bio: "Bio",
                  }) as [keyof typeof userInfo, string][]
                ).map(([key, label]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-600">{label}</p>
                    {isEditingPersonalInfo ? (
                      <input
                        type="text"
                        name={key}
                        value={userInfo[key]}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg p-2 text-gray-800"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{userInfo[key]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-4 md:p-6 shadow-md rounded-lg space-y-4">
              <h3 className="font-bold text-gray-800">Address</h3>
              <div className="flex justify-between items-center">
                <button
                  className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                >
                  {isEditingAddress ? "Save" : "Edit"}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(
                  Object.entries({
                    country: "Country",
                    city: "City/State",
                  }) as [keyof typeof userInfo, string][]
                ).map(([key, label]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-600">{label}</p>
                    {isEditingAddress ? (
                      <input
                        type="text"
                        name={key}
                        value={userInfo[key]}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg p-2 text-gray-800"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{userInfo[key]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
