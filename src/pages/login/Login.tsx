import { Divider } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useGoogleSignInBgMutation,
  useGoogleSignInWithPopupMutation,
  useLoginMutation,
} from "../../redux/features/auth/authApi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
const Login = () => {
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
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [googleSign] = useGoogleSignInWithPopupMutation();

  const [googbg] = useGoogleSignInBgMutation();
  const handleGoogleSignIn = async () => {
    let toastId = toast.loading("Logging in");
    try {
      const firebaseRes = await googleSign(null);
      const userCredential = firebaseRes?.data;

      console.log(userCredential);
      const userData = {
        email: userCredential?.email,
        password: "123456", // Provide a default password or let the backend handle it
        userName: userCredential?.displayName,
      };
      console.log(userData);
      const backendRes = await googbg(userData).unwrap();

      const accessToken = backendRes?.data?.accessToken;
      console.log(backendRes);

      const verifiedUser = verifyToken(backendRes?.data?.accessToken);

      dispatch(setUser({ user: verifiedUser, token: accessToken }));

      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      toast.error("Something wrong", { id: toastId, duration: 2000 });
    }
  };

  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  const handleCredentials = (type: string) => {
    const newCredentials =
      type === "user"
        ? { email: "emonsss@gmail.com", password: "123456" }
        : { email: "imonshomon@gmail.com", password: "123456789" };

    setCredentials(newCredentials);
    setValue("email", newCredentials.email);
    setValue("password", newCredentials.password);
  };

  const onSubmit = async (data: FieldValues) => {
    let toastId = toast.loading("Logging in");
    try {
      const res = await login(data).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken);
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("login successfully", { id: toastId, duration: 2000 });
      navigate(location?.state ? location.state.from.pathname : "/");
    } catch (error) {
      console.log(error);
      toast.error("Something wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <section className="py-[60px]">
      <div className="max-w-[1240px] mx-auto px-5  font-roboto">
        <div className="flex  gap-10  xl:gap-20 justify-center items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Link to="/">
              {" "}
              <img
                src="https://i.ibb.co.com/Z1FrPZh/Logo-4x.png"
                className="img-fluid rounded-top mb-2 w-[45px] h-[45px] ml-2"
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
            <div className="flex justify-center  mb-5 gap-x-3">
              <button
                onClick={() => handleCredentials("user")}
                className="flex w-full items-center justify-center gap-3.5 rounded-[20px] border border-stroke bg-gray p-2 hover:bg-opacity-50  max-w-[150px] shadow shadow-[#F4F6FB]"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#5985E1"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
                User
              </button>

              <button
                onClick={handleGoogleSignIn}
                className="flex w-full items-center justify-center gap-3.5 rounded-[20px] border border-stroke bg-gray p-2 hover:bg-opacity-50  max-w-[150px] shadow shadow-[#F4F6FB]"
              >
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

              <button
                onClick={() => handleCredentials("admin")}
                className="flex w-full items-center justify-center gap-3.5 rounded-[20px] border border-stroke bg-gray p-2 hover:bg-opacity-50  max-w-[150px] shadow shadow-[#F4F6FB]"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#75FBFD"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z" />
                        <path d="M12,12c2.21,0,4-1.79,4-4c0-1.37,0-3.5,0-3.5C16,3.67,15.33,3,14.5,3c-0.52,0-0.98,0.27-1.25,0.67 C12.98,3.27,12.52,3,12,3s-0.98,0.27-1.25,0.67C10.48,3.27,10.02,3,9.5,3C8.67,3,8,3.67,8,4.5c0,0,0,2.12,0,3.5 C8,10.21,9.79,12,12,12z M10,5.5h4V8c0,1.1-0.9,2-2,2s-2-0.9-2-2V5.5z" />
                      </g>
                    </g>
                  </svg>
                </span>
                Admin
              </button>
            </div>
            <div className="max-w-[500px] text-gray-400 text-[14px]  mb-5 mx-auto">
              <Divider>OR LOG IN MAIL</Divider>
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
                  value="Login"
                />
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-[#c7c7c7]">
                Don’t have any account?{" "}
                <Link to="/register" className=" text-[#6644D3] font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-[url('https://www.resume.com/static/siwi-left-bg-2775bb16ee97d03f578d52c38329ccbf.webp')] bg-cover bg-no-repeat w-full md:w-1/2 object-cover h-[500px] md:h-[600px] lg:h-[600px] rounded-[9px]">
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

export default Login;
