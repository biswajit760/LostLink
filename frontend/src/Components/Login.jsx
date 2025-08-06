import React, { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { authDataContext } from '../context/AuthContext';


const Login = () => {
  let {userData, setUserData} = useContext(authDataContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext);
  

  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const result = await axios.post(
      `${serverUrl}/api/user/login`,
      { email, password },
      { withCredentials: true }
    );

    setUserData(result.data.user); // ✅ FIXED
    console.log("Login Success:", result.data);

    navigate("/");
    toast.success("Welcome Back! 🎉");
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    toast.error("Login failed. Please check credentials.");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 
                relative overflow-hidden p-8 border border-white/10 shadow-xl px-4 ">
      
      {/* Glow Background Circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>
      {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            type="button"
            className="absolute top-4 left-4 bg-black border border-gray-300 rounded-full p-3 shadow hover:bg-gray-800 transition"
            title="Back to Home"
          >
            <IoIosArrowBack className="text-xl text-white" />
          </button>
      <form onSubmit={handleLogin} className="w-full max-w-md">
        <div className="bg-white p-8 rounded-sm shadow-lg w-full relative">
          
          

          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
            Login to Your Account
          </h2>

          {/* Email / Username Field */}
          <div className="mb-5 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <span className="absolute left-3 top-9 text-gray-400">
              <FaUser />
            </span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <span className="absolute left-3 top-9 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-sm hover:opacity-90 transition font-semibold"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-gray-800">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-black font-bold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
