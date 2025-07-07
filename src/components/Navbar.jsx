import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvaide";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold underline" : "text-gray-700"}>Home</NavLink></li>
      <li><NavLink to="/find-tutors" className={({ isActive }) => isActive ? "text-blue-500 font-bold underline" : "text-gray-700"}>Find Tutors</NavLink></li>
      <li><NavLink to="/add-tutorials" className={({ isActive }) => isActive ? "text-blue-500 font-bold underline" : "text-gray-700"}>Add Tutorials</NavLink></li>
      <li><NavLink to="/my-tutorials" className={({ isActive }) => isActive ? "text-blue-500 font-bold underline" : "text-gray-700"}>My Tutorials</NavLink></li>
      <li><NavLink to="/my-booked-tutorials" className={({ isActive }) => isActive ? "text-blue-500 font-bold underline" : "text-gray-700"}>My Booked Tutors</NavLink></li>
    </>
  );

  return (
    <div className="mx-12">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">
            <span className="text-red-700">Easy</span><sup>GURU</sup>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn">LogOut</button>
          ) : (
            <Link to="/login" className="btn">LogIn</Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
