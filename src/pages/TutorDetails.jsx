import { useLoaderData } from "react-router-dom";

const TutorDetails = () => {
  const tutor = useLoaderData();

  const {
    name,
    image,
    language,
    price,
    review,
    description,
  } = tutor || {};

  // 

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
      {/* Tutor Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      {/* Tutor Info */}
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{name}</h2>

      <div className="text-lg text-gray-700 space-y-1">
        <p><span className="font-semibold">Language:</span> {language}</p>
        <p><span className="font-semibold">Review:</span> ⭐ {review}</p>
        <p><span className="font-semibold">Price:</span> BDT {price}</p>
      </div>

      <div className="mt-4 text-gray-700">
        <p><span className="font-semibold">Description:</span></p>
        <p className="mt-1">{description}</p>
      </div>

      {/* Book Button (only UI) */}
      <div className="mt-6">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition">
          Book
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
