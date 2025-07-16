import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";

const TutorCard = ({ tutor }) => {
  const {
    name,
    image,
    language,
    students,
    lessons,
    speaks,
    rating,
    price,
    description,
  } = tutor || {};

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-28 h-28 object-cover rounded border"
      />

      {/* Info Section */}
      <div className="flex-1">
        {/* Name & Super tutor */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">
            Super tutor
          </span>
        </div>

        {/* Language, students & lessons */}
        <p className="text-gray-600 text-sm">{language}</p>
        <p className="text-sm text-gray-500">
          {students} active students • {lessons} lessons
        </p>

        {/* Speaks */}
        <p className="text-sm text-gray-500">{speaks}</p>

        {/* Description */}
        <p className="mt-2 text-sm">
          <span className="font-semibold">Certified English Tutor</span> —{" "}
          {description}
        </p>
      </div>

      {/* Right section: rating, price & button */}
      <div className="flex flex-col items-end gap-2 ml-auto">
        {/* Rating */}
        <div className="flex items-center text-sm text-gray-700">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="font-semibold">{rating}</span>
          <span className="ml-1 text-gray-500 text-xs">76 reviews</span>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-bold">BDT {price}</p>
          <p className="text-xs text-gray-500">50-min lesson</p>
        </div>

        {/* Book Button */}
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Book trial lesson
        </button>

        {/* Heart icon */}
        <HiOutlineHeart className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default TutorCard;
