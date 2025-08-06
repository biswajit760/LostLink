import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import toast from "react-hot-toast";
import { authDataContext } from '../context/AuthContext';

const SignUp = () => {
  let {userData, setUserData} = useContext(authDataContext)
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { serverUrl } = useContext(authDataContext);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/user/signup`,
        { name, email, password },
        { withCredentials: true }
      );
      setUserData(result.data);
      console.log("Signup Success:", result.data);
      navigate("/");
      toast.success("Sign up successful! 🎉");
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 
                 overflow-hidden p-8 border border-white/10 shadow-xl flex items-center justify-center px-4 relative">

    {/* Glow Background Circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>
      
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-black border border-gray-300 rounded-full p-3 shadow hover:bg-gray-800 transition cursor-pointer"
        title="Back to Home"
      >
        <IoIosArrowBack className="text-xl text-white" />
      </button>

      <form onSubmit={handleSignUp} className="w-full max-w-md">
        <div className="bg-white p-8 rounded-md shadow-lg w-full">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
            Create an Account
          </h2>

          {/* Username */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Username</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter your username"
                className="w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                className="w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center text-sm mb-6">
            <input type="checkbox" className="mr-2" required />
            <p className="text-gray-700">I agree to the Terms & Conditions</p>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-sm hover:opacity-90 transition"
          >
            Sign Up
          </button>

          {/* Redirect to Login */}
          <p className="text-center text-sm mt-4 text-gray-800">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-black font-bold hover:underline cursor-pointer"
            >
              Log In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
