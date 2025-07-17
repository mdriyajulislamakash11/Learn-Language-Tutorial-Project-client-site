import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvaide";
import axios from "axios";
import Swal from "sweetalert2";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user?.email}`, {
        withCredentials: true,
      }) // http://localhost:5000/bookings?email=rjakashchowdury@gmail.com
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleReview = (tutorId) => {
    axios
      .patch(`http://localhost:5000/tutorials/review/${tutorId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire("⭐ Reviewed!", "Review count increased!", "success");

          // নতুন করে bookings রিফ্রেশ করা (optional)
          axios
            .get(`http://localhost:5000/bookings?email=${user?.email}`)
            .then((res) => setBookings(res.data));
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        📚 My Booked Tutors
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Language</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((tutor) => (
              <tr key={tutor._id} className="text-center">
                <td className="px-4 py-2 border">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-2 border">{tutor.name}</td>
                <td className="px-4 py-2 border">{tutor.language}</td>
                <td className="px-4 py-2 border">BDT {tutor.price}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleReview(tutor.tutorId)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No tutors booked yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookedTutors;
