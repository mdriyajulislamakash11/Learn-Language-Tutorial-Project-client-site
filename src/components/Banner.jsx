import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Bannar = () => {
  const slides = [
    {
      image: 'https://i.ibb.co/07q3RB6/b5.png',
      title: 'Find the Best Tutors Online',
      description: 'Learn from experts anytime, anywhere with Easy GURU.',
      button: 'Explore Tutors',
    },
    {
      image: 'https://i.ibb.co/LwX62jn/b4.jpg',
      title: 'Add Your Own Tutorials',
      description: 'Become an instructor and share your knowledge.',
      button: 'Start Teaching',
    },
    {
      image: 'https://i.ibb.co/ymhh8M4q/b3.jpg',
      title: 'Track Your Booked Lessons',
      description: 'Stay updated with your learning schedule.',
      button: 'View Schedule',
    },
    {
      image: 'https://i.ibb.co/svW1yd6B/b2.jpg',
      title: 'Expand Your Knowledge',
      description: 'Join a platform where learning never stops.',
      button: 'Join Now',
    },
    {
      image: 'https://i.ibb.co/0jcqNkgw/b1.jpg',
      title: 'Join the Easy GURU Community',
      description: 'Start your journey with trusted mentors today.',
      button: 'Get Started',
    },
  ];

  return (
    <div className="max-w-full mx-auto mt-5 rounded overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-[300px] md:h-[700px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl max-w-2xl drop-shadow-md mb-6">
                  {slide.description}
                </p>
                <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition duration-300">
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

export default Bannar;
