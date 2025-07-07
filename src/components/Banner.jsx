import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesData = [
  {
    id: 1,
    title: "Find the Best Tutors Online",
    description: "Learn from experts anytime, anywhere with Easy GURU.",
    image: "https://i.ibb.co/zr63PWd/banner1.jpg",
    button: "Explore Tutors"
  },
  {
    id: 2,
    title: "Add Your Own Tutorials",
    description: "Become an instructor and share your knowledge.",
    image: "https://i.ibb.co/XCWtqFh/banner2.jpg",
    button: "Start Teaching"
  },
  {
    id: 3,
    title: "Track Your Booked Lessons",
    description: "Stay updated with your learning schedule.",
    image: "https://i.ibb.co/QbSf6pT/banner3.jpg",
    button: "View Schedule"
  }
];

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-ful  md:h-[700px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg mb-4">{slide.description}</p>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
