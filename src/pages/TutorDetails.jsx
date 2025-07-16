import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvaide";
import axios from "axios";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, name, image, language, email, price, review, description } =
    tutor || {};
  

  // book button er kaj
  const handleBookNow = () => {
    const BookingNow = {
      tutorId: _id,
      image,
      language,
      price,
      tutorEmail: email,
      email: user?.email,
    };

    axios
      .post(`http://localhost:5000/add-booking`, BookingNow)
      .then((res) => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            title: "Booked!",
            text: "✅ Your booking is successful.",
            icon: "success",
            confirmButtonColor: "#d33",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "❌ Booking failed. Try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      });
  };

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
        <p>
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p>
          <span className="font-semibold">Review:</span> ⭐ {review}
        </p>
        <p>
          <span className="font-semibold">Price:</span> BDT {price}
        </p>
      </div>

      <div className="mt-4 text-gray-700">
        <p>
          <span className="font-semibold">Description:</span>
        </p>
        <p className="mt-1">{description}</p>
      </div>

      {/* Book Button (only UI) */}
      <div className="mt-6">
        <button
          onClick={handleBookNow}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
