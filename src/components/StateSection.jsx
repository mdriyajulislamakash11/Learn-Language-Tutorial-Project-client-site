import React from "react";

const StateSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold ">Learning Overview</h2>
      <p className="w-2/4 mx-auto text-center my-4">
        Interactively benchmark value-added infrastructures without ethical
        solutions. Progressively incentivize cutting-edge data whereas
        plug-and-play convergence. Uniquely.
      </p>
      <div className=" mt-10 flex justify-between items-center text-center">
        {/* heading */}

        {/* all totors */}
        <div className="stat">
          <div className="stat-value">4,200</div>
          <div className="stat-desc">Experienced tutors</div>
        </div>

        {/* all totors */}
        <div className="stat">
          <div className="stat-value">4,200</div>
          <div className="stat-desc">5-star tutor reviews</div>
        </div>

        {/* all totors */}
        <div className="stat">
          <div className="stat-value">4,200</div>
          <div className="stat-desc">Subjects taught</div>
        </div>

        {/* all totors */}
        <div className="stat">
          <div className="stat-value">4,200</div>
          <div className="stat-desc">on the App Store</div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
