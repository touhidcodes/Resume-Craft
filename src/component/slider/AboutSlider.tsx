import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import profile1 from "../../assets/images/profile.png";
import profile2 from "../../assets/images/pro.png";
import profile3 from "../../assets/images/pro2.png";
import bag1 from "../../assets/images/a4.png";
import bag2 from "../../assets/images/a2.jpg";
import bag3 from "../../assets/images/a3.jpg";
import bag4 from "../../assets/images/a.jpg";
import { MdOutlineWatchLater } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";

const AboutUsSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const slides = [
    {
      profile: profile1,
      author: "Charlotte Grainger",
      title: "How to write a resume: Expert guide & examples (2024)",
      time: "57 min",
      image: bag1,
    },
    {
      profile: profile2,
      author: "James Peterson",
      title: "10 tips to ace your next job interview",
      time: "42 min",
      image: bag2,
    },
    {
      profile: profile3,
      author: "Emily Carter",
      title: "How to build an impressive LinkedIn profile",
      time: "33 min",
      image: bag3,
    },
    {
      profile: profile1,
      author: "Michael Lee",
      title: "The ultimate guide to professional networking",
      time: "45 min",
      image: bag4,
    },
  ];

  const colors = ["#EDD7DF", "#f2ebe6", "#feebe4", "#faf9da"];

  // Handle previous slide
  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handle next slide
  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="py-[60px]">
      <div className="container mx-auto px-4 font-roboto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[84px] text-[#003366]">
              The Elevator
            </h1>
            <p className="text-lg md:text-2xl font-normal leading-6 md:leading-[28px] mt-4 text-gray-600">
              A blog to elevate your resume, job search &
              <br />
              career to the top floor!
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              className="arrow left w-12 h-12 md:w-14 md:h-14 text-xl md:text-2xl font-semibold text-[#8c96a8] bg-[#eff2f9] rounded-full shadow-lg hover:bg-gray-200 focus:outline-none flex items-center justify-center"
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            <button
              className="arrow right w-12 h-12 md:w-14 md:h-14 text-xl md:text-2xl font-semibold text-[#8c96a8] bg-[#eff2f9] rounded-full shadow-lg hover:bg-gray-200 focus:outline-none flex items-center justify-center"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        // pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div
              className="flex flex-col md:flex-row text-start items-start 
              md:items-center
             max-w-[240px] md:max-w-[1077px] h-[440px] md:h-[440px] 
              p-4 md:p-6 rounded-lg shadow-lg mx-auto"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              {/* Left Side Text */}
              <div className="flex-1 text-center md:text-left">
                {/* Author Section */}
                <div className="text-gray-500 text-sm md:text-lg font-medium flex flex-col md:flex-row items-first md:items-center">
                  <p className="flex items-center">
                    Written By
                    <a
                      href="#"
                      className="flex items-center mt-2 md:mt-0 md:ml-3 font-semibold text-gray-800 hover:text-gray-600"
                    >
                      <img
                        src={slide.profile}
                        alt="Author"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {slide.author}
                    </a>
                  </p>
                </div>

                {/* Title Section */}
                <p
                  className="
  text-left md:text-start
  mt-4 text-lg md:text-2xl lg:text-[30px] 
  font-semibold leading-snug lg:leading-[40px] 
  text-gray-800 hover:text-gray-700"
                >
                  <a href="#">{slide.title}</a>
                </p>

                {/* Watch Time */}
                <div
                  className="flex 
  text-left 
  items-center
  md:items-center
  mt-2 text-gray-500 text-xs md:text-sm lg:text-base font-medium"
                >
                  <MdOutlineWatchLater className="mr-2" /> {slide.time}
                </div>
              </div>

              {/* Right Side Image */}
              <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
                <img
                  src={slide.image}
                  alt="About Us"
                  className="w-full max-w-[220px] md:max-w-[450px] rounded-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutUsSlider;
