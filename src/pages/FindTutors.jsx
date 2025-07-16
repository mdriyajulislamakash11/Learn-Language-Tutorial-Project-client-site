import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const FindTutors = () => {
  const { category } = useParams(); 
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tutorials")
      .then((res) => {
      if(category){  // ar category thakle data pabo category ways 
          const filtered = res.data.filter(
          (tutor) => tutor.language.toLowerCase() === category.toLowerCase()
        );
        setTutors(filtered);
      }else{
        setTutors(res.data)   // jodi category na thake sob data pabo 
      }
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
      });
  }, [category]);



  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 capitalize">{category} Tutors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutors.map((tutor) => <Card key={tutor._id} tutor={tutor} /> )}
      </div>
    </div>
  );
};

export default FindTutors;
