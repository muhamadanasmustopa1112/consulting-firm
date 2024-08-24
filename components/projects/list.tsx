"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const ListProjects = () => {
  const projects = [
    {
      name: "Tech",
      description:
        "Shape the future with us! Be a pivotal force in advancing mobile app innovation. Your role goes beyond support; it's a silent force driving progress. Step into the future where your presence is essential. Join us now!",
    },
    {
      name: "Real Estate",
      description:
        "Join our real estate revolution! Your role goes beyond support; it's an influential force driving progress. Envision a future where your presence is instrumental. Take the plunge into innovation-shape the real estate future with us!",
    },
    {
      name: "F&B",
      description:
        "Elevate your dining experience with us! Explore culinary excellence where every bite is a celebration. Join us for an exceptional journey, indulging in a feast for the senses and creating unforgettable moments at our restaurants!",
    },
    {
      name: "Health",
      description:
        "Explore health innovation with us where cutting-edge solutions elevate well-being. Embark on a journey with us,where health solutions redefine the path to optimal living.",
    },
    {
      name: "Fashion",
      description:
        "Step into a world of style with us! Discover fashion that transcends trends, embracing individuality and self-expression. our curated collections cater to every taste. Join us-where fashion becomes a canvas for personal expression.",
    },
  ];

  return (
    <div className="w-full max-w-full flex flex-col items-center gap-4 relative">
      <Swiper
        spaceBetween={16}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".swiper-btn-projects-next",
          prevEl: ".swiper-btn-projects-prev",
        }}
        className="h-full w-full max-w-full"
      >
        {projects.map((item, idx) => (
          <SwiperSlide key={idx} className="!h-full">
            <div className="h-full p-4 sm:p-6 md:p-8 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] text-center flex flex-col justify-center items-center gap-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold break-words">
                {item.name}
              </h2>
              <p className="text-sm md:text-base break-words">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-row gap-4 mt-4">
        <button className="swiper-btn-navigation swiper-btn-projects-prev border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] lg:px-3 lg:py-1 px-4 py-2 text-sm sm:text-base transition-colors hover:bg-gray-700">
          Previous
        </button>
        <button className="swiper-btn-navigation swiper-btn-projects-next border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] lg:px-3 lg:py-1 px-4 py-2 text-sm sm:text-base transition-colors hover:bg-gray-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default ListProjects;
