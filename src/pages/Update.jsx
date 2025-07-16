import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tutorial/${id}`)
      .then((res) => setTutorial(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTutorial = {
      name: form.name.value,
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value,
      review: form.review.value,
    };

    axios
      .put(`http://localhost:5000/tutorial/${id}`, updatedTutorial)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success!", "Tutorial updated successfully!", "success");
          navigate("/my-tutorials");
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to update tutorial", "error");
      });
  };

  if (!tutorial) {
    return <div className="text-center text-lg py-10">Loading tutorial...</div>;
  }

  return (
    <div className=" md:w-2/6 mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Tutorial</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Name (readonly) */}
        <input
          type="text"
          name="name"
          defaultValue={tutorial.name}
          readOnly
          className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
        />

        {/* Email (readonly) */}
        <input
          type="email"
          name="email"
          defaultValue={tutorial.email} // নিশ্চিত করো data আছে
          readOnly
          className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
        />

        {/* Image (editable) */}
        <input
          type="text"
          name="image"
          defaultValue={tutorial.image}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          required
        />

        {/* Language (editable select) */}
        <select
          name="language"
          defaultValue={tutorial.language}
          required
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Select a language</option>
          <option value="English Tutors">English Tutors</option>
          <option value="Spanish Tutors">Spanish Tutors</option>
          <option value="French Tutors">French Tutors</option>
          <option value="German Tutors">German Tutors</option>
          <option value="Italian Tutors">Italian Tutors</option>
          <option value="Chinese Tutors">Chinese Tutors</option>
          <option value="Arabic Tutors">Arabic Tutors</option>
          <option value="Japanese Tutors">Japanese Tutors</option>
          <option value="Portuguese Tutors">Portuguese Tutors</option>
        </select>

        {/* Price (editable) */}
        <input
          type="number"
          name="price"
          defaultValue={tutorial.price}
          placeholder="Price"
          className="w-full border p-2 rounded"
          required
        />

        {/* Description (editable) */}
        <textarea
          name="description"
          defaultValue={tutorial.description}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />

        {/* Review (readonly) */}
        <input
          type="text"
          name="review"
          defaultValue={tutorial.review}
          readOnly
          className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
