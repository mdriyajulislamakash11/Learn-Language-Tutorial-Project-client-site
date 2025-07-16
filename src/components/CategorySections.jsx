import { useNavigate, useParams } from "react-router-dom";
import { BsBank2 } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { FaGoogleScholar, FaTowerObservation } from "react-icons/fa6";
import { GiStoneTower } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { LuSchool, LuUniversity } from "react-icons/lu";
import { PiCraneTowerBold } from "react-icons/pi";
import { RiSchoolFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

const CategorySections = () => {
  const navigate = useNavigate();
  const {category} = useParams()
  const [allTutorials, setAllTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/tutorials/${category}`).then((res) => {
      setAllTutorials(res.data);
      console.log(res.data)
    });
  }, []);

  const filterByLanguage = (language) => {
    const filtered = allTutorials.filter(
      (tutorial) => tutorial.language === language
    );
    setFilteredTutorials(filtered);
  };

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-center text-4xl font-bold ">
          Choose Tutorial Categories
        </h2>
        <p className="w-2/4 mx-auto text-center my-4">
          Authoritatively foster transparent e-services whereas timely
          technologies. Continually impact worldwide imperatives whereas
          collaborative quality vectors. Competently plagiarize.
        </p>
      </div>

      {/* category card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        {/* card 1 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/English")}
        >
          <div className="p-4 text-2xl">
            <FaGoogleScholar />
          </div>
          <div>
            <h2
              className="text-2xl font-bold "
             
            >
              English Tutors
            </h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 2 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
            onClick={() => navigate("/find-tutors/Spanish Tutors")}
        >
          <div className="p-4 text-2xl">
            <RiSchoolFill />
          </div>
          <div>
            <h2 className="text-2xl font-bold"
            >Spanish Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 3 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/French Tutors")}
        >
          <div className="p-4 text-2xl">
            <LuSchool />
          </div>
          <div>
            <h2 className="text-2xl font-bold">French Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 4 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/German Tutors")}
        >
          <div className="p-4 text-2xl">
            <FaUniversity />
          </div>
          <div>
            <h2 className="text-2xl font-bold">German Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 5 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/Italian Tutors")}
        >
          <div className="p-4 text-2xl">
            <LuUniversity />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Italian Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 6 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/Chinese Tutors")}
        >
          <div className="p-4 text-2xl">
            <GiStoneTower />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Chinese Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 7 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/Arabic Tutors")}
        >
          <div className="p-4 text-2xl">
            <PiCraneTowerBold />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Arabic Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 8 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/Japanese Tutors")}
        >
          <div className="p-4 text-2xl">
            <BsBank2 />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Japanese Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>

        {/* card 9 */}
        <div
          className="flex justify-between items-center border-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/find-tutors/Portuguese Tutors")}
        >
          <div className="p-4 text-2xl">
            <FaTowerObservation />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Portuguese Tutors</h2>
            <p className="">sit amet consectetur.</p>
          </div>
          <div className="p-6">
            <IoIosArrowForward />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategorySections;
