import { useState, useEffect } from "react";
import teamImage from "../../../assets/images/t.jpeg";
import { Helmet } from "react-helmet-async";
import {
  useGetUserProfileQuery,
  useUpdateUserMutation,
} from "../../../redux/features/user/userApi";
import { toast } from "sonner";

const UserProfile = () => {
  const { data: usersData } = useGetUserProfileQuery("");
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

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

  useEffect(() => {
    if (usersData?.data) {
      const user = usersData.data;
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

  // Handle input changes
  const handleInputChange = (key: keyof typeof userInfo, value: string) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }));
  };

  // Handle save action
  const handleSave = async () => {
    try {
      const userData = await updateUser(userInfo).unwrap();
      console.log(userData);

      toast.success("Profile updated successfully!");
      setIsEditingPersonalInfo(false);
      setIsEditingAddress(false);
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    }
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
                  <h3 className="text-lg font-bold">{userInfo.userName}</h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {userInfo.bio}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base">
                    {userInfo.city}
                  </p>
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
                {Object.entries({
                  userName: "Full Name",
                  email: "Email Address",
                  phone: "Phone",
                  bio: "Bio",
                }).map(([key, label]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-600">{label}</p>
                    {isEditingPersonalInfo ? (
                      <input
                        type="text"
                        value={userInfo[key as keyof typeof userInfo]}
                        onChange={(e) =>
                          handleInputChange(
                            key as keyof typeof userInfo,
                            e.target.value
                          )
                        }
                        className="w-full border rounded-lg p-2 text-gray-800"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">
                        {userInfo[key as keyof typeof userInfo]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-4 md:p-6 shadow-md rounded-lg space-y-4">
              <h3 className="font-bold text-gray-800">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries({
                  country: "Country",
                  city: "City/State",
                }).map(([key, label]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-600">{label}</p>
                    {isEditingAddress ? (
                      <input
                        type="text"
                        value={userInfo[key as keyof typeof userInfo]}
                        onChange={(e) =>
                          handleInputChange(
                            key as keyof typeof userInfo,
                            e.target.value
                          )
                        }
                        className="w-full border rounded-lg p-2 text-gray-800"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">
                        {userInfo[key as keyof typeof userInfo]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            {(isEditingPersonalInfo || isEditingAddress) && (
              <div className="text-right">
                <button
                  className={`px-6 py-2 rounded-lg text-white ${
                    isUpdating ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  onClick={handleSave}
                  disabled={isUpdating}
                >
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
