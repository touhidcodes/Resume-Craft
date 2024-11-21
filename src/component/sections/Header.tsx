import { Button } from "@mui/material";
import imgOne from "../../assets/header-img/header-img-1.webp";
import imgTwo from "../../assets/header-img/header-img-2.webp";
import imgThree from "../../assets/header-img/header-img-3.webp";
import imgFour from "../../assets/header-img/header-img-4.webp";
import imgFive from "../../assets/header-img/header-img-5.webp";
import imgSix from "../../assets/header-img/header-img-6.webp";
import imgSeven from "../../assets/header-img/header-img-7.webp";
import imgEight from "../../assets/header-img/header-img-8.webp";
import headerImg from "../../assets/header-img/header-img.webp";

const Header = () => {
  return (
    <div className="bg-[#F7F9FC] min-h-[calc(100svh_-_80px)] flex flex-col justify-center items-center">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0 sm:py-10 md:py-0 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-5">
          <div>
            <div className="flex items-center gap-x-3">
              <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p>35,330 resumes created today</p>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mt-3">
              The professional resume builder
            </h1>
            <h3 className="md:text-xl my-7">
              Only 2% of resumes win. Yours will be one of them. Let’s build you
              a resume that works.
            </h3>
            <Button size="large" variant="contained">
              Create My Resume
            </Button>

            <div className="mt-20 hidden lg:flex items-start gap-x-8">
              <div className="space-y-3 border-l pl-4">
                <span className="bg-green-100 text-green-600 inline-block text-3xl px-2 py-1">
                  39%
                </span>
                <h4 className="text-muted">more likely to get hired</h4>
              </div>
              <div className="space-y-3 border-l pl-4">
                <span className="bg-yellow-100 text-yellow-600 inline-block text-3xl px-2 py-1">
                  8%
                </span>
                <h4 className="text-muted">better pay with your next job</h4>
              </div>
            </div>
          </div>
          <div className="relative md:mx-16 lg:mx-0">
            <img
              src={headerImg}
              alt="header image"
              className="w-[380px] md:w-[450px] lg:w-[560px] object-center"
            />
            <img
              src={imgOne}
              alt="header image"
              className="absolute h-[440px] w-[312px] left-[10px] sm:left-[80px] md:left-[159px] top-[30px] "
            />
            <img
              src={imgEight}
              alt="header image"
              className="absolute w-[98px] right-0 sm:left-[350px] md:left-[418px] top-[168px] "
            />
            <img
              src={imgSix}
              alt="header image"
              className="absolute w-[125px] right-0 sm:left-[300px] md::left-[425px] top-[75px] "
            />
            <img
              src={imgThree}
              alt="header image"
              className="absolute w-[32px] left-16 top-40 sm:left-[165px] sm:top-[75px] "
            />
            <img
              src={imgTwo}
              alt="header image"
              className="absolute w-[296px] right-0 sm:left-[112px] top-[230px] "
            />
            <img
              src={imgFive}
              alt="header image"
              className="absolute w-[198px] right-0 sm:left-[250px] md:left-[355px] top-[280px] "
            />
            <img
              src={imgFour}
              alt="header image"
              className="absolute w-[350px] right-0 sm:left-[120px] md:left-[200px] top-[0px] "
            />
            <img
              src={imgThree}
              alt="header image"
              className="absolute w-[62px] left-[10px] sm:left-[60px] md:left-[110px] top-16 sm:top-[10px] "
            />
            <img
              src={imgSeven}
              alt="header image"
              className="absolute w-[49px] right-0 sm:left-[320px] md:left-[430px] top-[220px] "
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0 py-10 flex justify-center items-center lg:hidden mt-28 lg:mt-0">
        <div className="flex items-start gap-x-8">
          <div className="space-y-3 border-l pl-4">
            <span className="bg-green-100 text-green-600 inline-block text-3xl px-2 py-1">
              39%
            </span>
            <h4 className="text-muted">more likely to get hired</h4>
          </div>
          <div className="space-y-3 border-l pl-4">
            <span className="bg-yellow-100 text-yellow-600 inline-block text-3xl px-2 py-1">
              8%
            </span>
            <h4 className="text-muted">better pay with your next job</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
