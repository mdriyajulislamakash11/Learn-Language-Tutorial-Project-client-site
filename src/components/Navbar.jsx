// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Auth/AuthProvaide";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => console.log("Logged out"))
//       .catch((err) => console.error(err));
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-bold underline" : "text-gray-700"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/find-tutors"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-bold underline" : "text-gray-700"
//           }
//         >
//           Find Tutors
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/add-tutorials"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-bold underline" : "text-gray-700"
//           }
//         >
//           Add Tutorials
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/my-tutorials"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-bold underline" : "text-gray-700"
//           }
//         >
//           My Tutorials
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/my-booked-tutorials"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-bold underline" : "text-gray-700"
//           }
//         >
//           My Booked Tutors
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="mx-4 md:mx-12">
//       <div className="navbar bg-base-100 shadow-md rounded-lg">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden" role="button">
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>

//           <Link to="/" className="btn btn-ghost text-xl font-extrabold flex items-center gap-1">
//             <span className="text-red-700">Easy</span>
//             <sup className="text-sm font-normal">GURU</sup>
//           </Link>
//         </div>

//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>

//         <div className="navbar-end flex items-center gap-4">
//           {user ? (
//             <>
//               <div
//                 className="relative"
//                 onMouseEnter={() => setShowTooltip(true)}
//                 onMouseLeave={() => setShowTooltip(false)}
//               >
//                 <img
//                   src={user.photoURL || "/default-profile.png"}
//                   alt="User Profile"
//                   className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
//                   title={user.displayName} // Optional native tooltip
//                 />
//                 {showTooltip && (
//                   <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-3 whitespace-nowrap z-10 shadow-lg">
//                     {user.displayName}
//                   </div>
//                 )}
//               </div>
//               <button
//                 onClick={handleLogOut}
//                 className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="btn btn-primary">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvaide";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    // LocalStorage থেকে থিম নিয়ে আসা
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  // থিম বদলালে ক্লাস আপডেট ও লোকালস্টোরেজে রাখা
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-tutors"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-tutorials"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-tutorials"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-booked-tutorials"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          My Booked Tutors
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-4 md:mx-12">
      <div className="navbar bg-base-100 dark:bg-gray-900 shadow-md rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" role="button">
              <svg
                className="h-6 w-6 dark:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost text-xl font-extrabold flex items-center gap-1 dark:text-white"
          >
            <span className="text-red-700 dark:text-red-400">Easy</span>
            <sup className="text-sm font-normal">GURU</sup>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              // Sun icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 19.778l-.707-.707M21 12h-1M4 12H3m15.364 4.95l-.707-.707M6.343 6.343l-.707-.707"
                />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>

          {user ? (
            <>
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <img
                  src={user.photoURL || "/default-profile.png"}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
                  title={user.displayName} // native tooltip
                />
                {showTooltip && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-3 whitespace-nowrap z-10 shadow-lg">
                    {user.displayName}
                  </div>
                )}
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

