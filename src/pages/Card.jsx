import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  const navigate = useNavigate(); // ✅ navigate hook

  const {
    _id,
    name,
    image,
    language,
    students,
    lessons,
    speaks,
    rating,
    price,
    review,
    description,
  } = tutor || {};

  console.log(tutor)

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
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">
            Super tutor
          </span>
        </div>
        <p className="text-gray-600 text-sm">{language}</p>
        <p className="text-sm text-gray-500">
          {students} active students • {lessons} lessons
        </p>
        <p className="text-sm text-gray-500">{speaks}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">Certified English Tutor</span> —{" "}
          {description}
        </p>
      </div>

      {/* Right section */}
      <div className="flex flex-col items-end gap-2 ml-auto">
        <div className="flex items-center text-sm text-gray-700">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="font-semibold">{rating}</span>
          <span className="ml-1 text-gray-500 text-xs">{review}</span>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold">BDT {price}</p>
          <p className="text-xs text-gray-500">50-min lesson</p>
        </div>

        <button
          onClick={() => navigate(`/tutor/${_id}`)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium"
        >
          Details lesson
        </button>

        <HiOutlineHeart className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default TutorCard;
