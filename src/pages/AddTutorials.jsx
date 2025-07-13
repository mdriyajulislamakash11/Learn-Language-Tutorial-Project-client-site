import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvaide";
import axios from "axios";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);

  const handleAddTutorial = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const review = 0;

    const tutorial = {
      name,
      email,
      image,
      language,
      price,
      description,
      review,
    };
    console.log(tutorial);

    // post mathods:
    axios.post(`http://localhost:5000/add-tutorials`, tutorial).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 my-10 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Add a New Tutorial
      </h2>

      <form onSubmit={handleAddTutorial} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Tutorial Image */}
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Enter tutorial image URL"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Language */}
        <div>
          <label className="block mb-1 font-semibold">Language</label>
          <input
            type="text"
            name="language"
            placeholder="Enter language name"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold">Price (৳)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Write something..."
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Review */}
        <div>
          <label className="block mb-1 font-semibold">Review (Default)</label>
          <input
            type="number"
            name="review"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
          />
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorials;
