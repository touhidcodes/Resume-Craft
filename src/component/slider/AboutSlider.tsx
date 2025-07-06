import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import profile1 from "../../assets/images/profile.png";
import profile2 from "../../assets/images/pro.png";
import profile3 from "../../assets/images/pro2.png";
import bag1 from "../../assets/images/a4.png";
import bag2 from "../../assets/images/a2.jpg";
import bag3 from "../../assets/images/a3.jpg";
import bag4 from "../../assets/images/a.jpg";
import {
  MdOutlineWatchLater,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const AboutUsSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const slides = [
    {
      profile: profile1,
      author: "Charlotte Grainger",
      title: "How to write a resume: Expert guide & examples (2024)",
      time: "57 min",
      image: bag1,
      category: "Resume Writing",
      readTime: "8 min read",
      featured: true,
    },
    {
      profile: profile2,
      author: "James Peterson",
      title: "10 powerful tips to ace your next job interview",
      time: "42 min",
      image: bag2,
      category: "Interview Prep",
      readTime: "6 min read",
      featured: false,
    },
    {
      profile: profile3,
      author: "Emily Carter",
      title: "How to build an impressive LinkedIn profile that gets noticed",
      time: "33 min",
      image: bag3,
      category: "LinkedIn",
      readTime: "5 min read",
      featured: false,
    },
    {
      profile: profile1,
      author: "Michael Lee",
      title: "The ultimate guide to professional networking in 2024",
      time: "45 min",
      image: bag4,
      category: "Networking",
      readTime: "7 min read",
      featured: false,
    },
  ];

  const colors = [
    "bg-gradient-to-br from-purple-100 to-pink-100",
    "bg-gradient-to-br from-blue-100 to-cyan-100",
    "bg-gradient-to-br from-orange-100 to-yellow-100",
    "bg-gradient-to-br from-green-100 to-teal-100",
  ];

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
    <div className="py-6 md:py-8 lg:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 font-roboto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <HiOutlineBookOpen className="text-white text-xl" />
              </div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Career Resources
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 mb-4">
              The Elevator
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-600 max-w-2xl">
              A blog to elevate your resume, job search &
              <br className="hidden sm:block" />
              career to the top floor!
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Expert Tips
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Career Advice
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Industry Insights
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              className="group w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 flex items-center justify-center"
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              <MdArrowBackIos className="text-gray-600 group-hover:text-blue-600 text-lg transition-colors duration-300" />
            </button>
            <button
              className="group w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 flex items-center justify-center"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <MdArrowForwardIos className="text-gray-600 group-hover:text-blue-600 text-lg transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            320: {
              spaceBetween: 15,
            },
            768: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
          className="!pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="px-4 md:px-6">
                <div
                  className={`
                    relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 
                    ${colors[index % colors.length]}
                    w-full max-w-[320px] sm:max-w-[400px] md:max-w-[900px] lg:max-w-[1100px]
                    mx-auto cursor-pointer group
                  `}
                >
                  {/* Featured Badge */}
                  {slide.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row p-6 md:p-8 lg:p-10 min-h-[400px] md:min-h-[440px]">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center md:pr-8">
                      {/* Category */}
                      <div className="mb-4">
                        <span className="inline-block bg-white/70 backdrop-blur-sm text-gray-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                          {slide.category}
                        </span>
                      </div>

                      {/* Author Section */}
                      <div className="flex items-center mb-4">
                        <img
                          src={slide.profile}
                          alt={slide.author}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                        />
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 font-medium">
                            Written by
                          </p>
                          <p className="text-sm sm:text-base font-semibold text-gray-800">
                            {slide.author}
                          </p>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {slide.title}
                      </h2>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <MdOutlineWatchLater className="mr-2 text-base" />
                          <span className="text-sm sm:text-base font-medium">
                            {slide.time}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <HiOutlineBookOpen className="mr-2 text-base" />
                          <span className="text-sm sm:text-base font-medium">
                            {slide.readTime}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="inline-flex items-center bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 w-fit">
                        <FaPlay className="mr-2 text-sm" />
                        <span className="text-sm sm:text-base">
                          Read Article
                        </span>
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
                      <div className="relative overflow-hidden rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Additional Info Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12">
        <div className="text-center">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Join thousands of professionals who've transformed their careers
            with our expert guidance
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Updated Weekly</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Expert Written</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>Industry Insights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          transform: scale(1.2) !important;
        }
        
        @media (max-width: 768px) {
          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUsSlider;
