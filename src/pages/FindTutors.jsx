import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const FindTutors = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTutors, setFilteredTutors] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-mu-ten-68.vercel.app/tutorials")
      .then((res) => {
        let data = res.data;
        if (category) {
          data = data.filter(
            (tutor) => tutor.language.toLowerCase() === category.toLowerCase()
          );
        }
        setTutors(data);
        setFilteredTutors(data);
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
      });
  }, [category]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = tutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTutors(filtered);
  };

  return (
    <div className="px-4 py-6 w-11/12 mx-auto">
      {/* Title and Search */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 capitalize">
          {category || "All"} Tutors
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 max-w-xl mx-auto">
          <label
            htmlFor="search"
            className="text-xl font-semibold whitespace-nowrap"
          >
            Search By
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by language..."
            value={searchText}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-4 py-2 w-full sm:max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tutors Grid */}
      {filteredTutors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <Card key={tutor._id} tutor={tutor} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No tutors found matching your search.
        </p>
      )}
    </div>
  );
};

export default FindTutors;
