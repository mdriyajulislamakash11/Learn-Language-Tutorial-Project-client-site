import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FindTutors = () => {
  const { category } = useParams(); 
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tutorials")
      .then((res) => {
        const filtered = res.data.filter(
          (tutor) => tutor.language.toLowerCase() === category.toLowerCase()
        );
        setTutors(filtered);
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
      });
  }, [category]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 capitalize">{category} Tutors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="p-4 border shadow rounded">
            <img src={tutor.image} alt={tutor.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-xl font-semibold">{tutor.name}</h3>
            <p><strong>Language:</strong> {tutor.language}</p>
            <p><strong>Price:</strong> {tutor.price}</p>
            <p><strong>Review:</strong> {tutor.review}</p>
            <p>{tutor.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
