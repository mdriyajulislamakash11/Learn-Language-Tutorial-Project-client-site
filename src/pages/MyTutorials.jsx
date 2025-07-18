import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvaide";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://server-mu-ten-68.vercel.app/tutorials?email=${user?.email}`)
        .then((res) => setTutorials(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // deleted data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://server-mu-ten-68.vercel.app/tutorial/${id}`).then((res) => {
          if (res.data.deletedCount) {
            const remaining = tutorials.filter(
              (tutorial) => tutorial._id !== id
            );
            setTutorials(remaining);
            Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Tutorials</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th>Image</th>
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Description</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial._id} className="border-t">
                <td>
                  <img
                    src={tutorial.image}
                    alt={tutorial.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>{tutorial.name}</td>
                <td>{tutorial.language}</td>
                <td>${tutorial.price}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.review}</td>
                <td>
                  <button
                    onClick={() => handleDelete(tutorial._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <Link to={`/update/${tutorial?._id}`} className="">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {tutorials.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No tutorials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
