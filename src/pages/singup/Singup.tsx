import { Divider } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Singup = () => {
  const [statics] = useState([
    "Alawys free",
    "Access to professional templates",
    "Job specific tips and examples",
    "Unlimited resume downloads",
    "Personalized job feed",
    "Free resume audits",
    "Link resume with Indeed",
  ]);
  const [visible, setVisible] = useState(false);

  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const res = await login(data);
    console.log(res);
    toast.success("Logging in");
  };

  return (
    <section className="py-[60px]">
      <div className="max-w-[1240px] mx-auto px-5  font-roboto">
        <div className="flex  gap-10  xl:gap-20 justify-center items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/Z1FrPZh/Logo-4x.png"
                className="rounded-top mb-2 w-[45px] h-[45px] ml-2"
                alt=""
              />
            </Link>

            <h2 className="text-[30px] xl:text-4xl font-bold mb-4 text-[#0B0D58] text-center">
              {" "}
              Get Started With Resume.Craft
            </h2>
            <p className="text-gray-600 mb-8  text-center">
              You may use Socail logins for more-fuild experience
            </p>
            <div className="flex justify-center  mb-5">
              <button className="flex w-full items-center justify-center gap-3.5 rounded-[20px] border border-stroke bg-gray p-2 hover:bg-opacity-50  max-w-[150px] shadow shadow-[#F4F6FB]">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_191_13499)">
                      <path
                        d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_191_13499">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Google
              </button>
            </div>
            <div className="max-w-[500px] text-gray-400 text-[14px]  mb-5 mx-auto">
              <Divider>OR SING UP MAIL</Divider>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col max-w-[500px] mb-8 mx-auto relative">
                <label
                  className="text-[16px] font-normal text-[#6644D3] mb-2"
                  htmlFor="email"
                >
                  {" "}
                  Email Address
                </label>
                <input
                  className="w-full py-[10px] px-[20px]  rounded-[20px] border-2 border-[#6644D3] focus:border-[#ae95ff]   focus:outline-none "
                  placeholder="Enter Your Email"
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                />

                <label className="absolute bottom-[-25px]">
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Email is required
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col max-w-[500px] mb-10 mx-auto relative">
                <label
                  className="text-[16px] font-normal text-[#6644D3] mb-2"
                  htmlFor="password"
                >
                  {" "}
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className="w-full py-[10px] px-[20px]  rounded-[20px] border-2 border-[#6644D3] focus:border-[#ae95ff]   focus:outline-none "
                  placeholder="Enter Your Password"
                  type={visible ? "text" : "password"}
                  id="password"
                />
                <span
                  onClick={() => setVisible(!visible)}
                  className="absolute right-4 top-11 cursor-pointer"
                >
                  {visible ? (
                    <Visibility color="disabled" className="w-5 h-5  " />
                  ) : (
                    <VisibilityOff color="disabled" className="w-5 h-5  " />
                  )}
                </span>
                <label className="absolute bottom-[-25px]">
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      Password is required
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col max-w-[500px] mx-auto">
                <input
                  className="w-full bg-[#6644D3] py-[10px] font-semibold px-[20px] text-[#F4F4F4]  rounded-[20px]  cursor-pointer"
                  type="submit"
                  value="Sing up"
                />
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-[#c7c7c7]">
                Already have an account?{" "}
                <Link to="/login" className=" text-[#6644D3] font-bold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-[url('https://www.resume.com/static/siwi-left-bg-2775bb16ee97d03f578d52c38329ccbf.webp')] bg-cover bg-no-repeat w-full md:w-1/2 object-cover h-[87vh] md:h-[70vh] lg:h-[600px] rounded-[9px]">
            <div className=" max-w-[400px] mx-auto py-10 px-5 lg:px-0">
              <p className="text-white  text-[14px] mb-3 font-semibold">
                An Our Patner
              </p>
              <img className="mb-5" src="" alt="logo" />

              <div className="grid grid-cols-1 gap-y-10  ">
                {statics.map((st) => (
                  <div className="flex gap-2  items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="styles-module--tips-fill-icon--ae4e9"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967C6.17678 9.76256 6.17678 10.2374 6.46967 10.5303L8.59099 12.6517C8.88388 12.9445 9.35876 12.9445 9.65165 12.6517L13.7529 8.55043C14.0458 8.25754 14.0458 7.78266 13.7529 7.48977C13.46 7.19688 12.9851 7.19688 12.6922 7.48977L9.12132 11.0607L7.53033 9.46967Z"
                        fill="white"
                      ></path>
                    </svg>
                    <p className="text-white">{st}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singup;
