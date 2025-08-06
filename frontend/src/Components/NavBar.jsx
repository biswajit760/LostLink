import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdLogIn } from 'react-icons/io';
import { RiLogoutCircleLine } from 'react-icons/ri';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Logo from '/LOGO.png';
import { authDataContext } from '../context/AuthContext';
import { PiSignInBold } from "react-icons/pi";



const NavBar = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(authDataContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const logout = async () => {
    try {
      const { data } = await axios.get(`${serverUrl}/api/user/logout`, {
        withCredentials: true,
      });
      if (data.success) {
        toast.success(data.message);
        setUserData(null);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="w-full px-6 md:px-12 py-2 flex items-center justify-between bg-white shadow-sm font-medium relative z-50 mb-10 ">
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" className="w-36 h-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center justify-evenly gap-12 text-gray-800 font-semibold">
        <li
          className="relative group cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="group-hover:text-black transition duration-200">
            Home
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li
          className="relative group cursor-pointer"
          onClick={() => navigate("/Lost")}
        >
          <span className="group-hover:text-black transition duration-200">
            Lost Reports
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li
          className="relative group cursor-pointer"
          onClick={() => navigate("/guidelines")}
        >
          <span className="group-hover:text-black transition duration-200">
            Guidelines
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li
          className="relative group cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          <span className="group-hover:text-black transition duration-200">
            Contact Us
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* User Dropdown */}
      <div
        className="ml-4 flex items-center gap-2 cursor-pointer border-2 border-black rounded-full px-3 py-1 hover:bg-gray-100 transition"
        onClick={() => setShowPopUp((prev) => !prev)}
      >
        <span className="text-xl">
          {userData ? (
            <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
              {userData?.name
    ? userData.name[0].toUpperCase()
    : <FaUserCircle className="text-xl" />}
            </div>
          ) : (
            <FaUserCircle className="text-2xl" />
          )}
        </span>
        <GiHamburgerMenu className="text-xl" />
      </div>

      {/* Dropdown Menu */}
      {showPopUp && (
        <div className="absolute right-4 top-[90%] w-40 bg-white border border-gray-300 rounded-md shadow-md z-50 transition-all duration-200">
          {!userData && (
            <div>
              <div
              onClick={() => {
                setShowPopUp(false);
                navigate("/login");
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-600 flex justify-between items-center"
            >
              Login
              <IoMdLogIn className="text-lg" />
            </div>
            <div
              onClick={() => {
                setShowPopUp(false);
                navigate("/signup");
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-600 flex justify-between items-center"
            >
              Sign Up
              <PiSignInBold className="text-lg" />
              
            </div>
            </div>
          )}
          {userData && (
            <div
              onClick={() => {
                setShowPopUp(false);
                logout();
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-red-500 flex justify-between items-center"
            >
              Logout
              <RiLogoutCircleLine className="text-lg" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
