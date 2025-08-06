import React,{useContext} from "react";
import { authDataContext } from '../context/AuthContext';

import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Card = ({ item }) => {
  const { userData, setUserData } = useContext(authDataContext);

  

  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 mt-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="bg-gray-100 flex justify-center items-center h-60 overflow-hidden group">
        <img
          src={item.imageUrl || "https://via.placeholder.com/250"}
          alt={item.itemName || "Reported Item"}
          className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col space-y-4 bg-gradient-to-br from-white to-gray-50">
        {/* Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Item Name:
            <span className="ml-2 font-bold text-indigo-700 uppercase">
              {item.itemName}
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="bg-gray-100 px-3 py-2 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-700 uppercase mb-1">
            Description
          </h3>
          <p className="text-sm text-gray-600">
            {item.description || "No description provided."}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaUser className="text-indigo-600 w-4 h-4" />
            <span className="font-medium text-black">Found by:</span>
            <span>{item.owner?.name || "Unknown"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-600 w-4 h-4" />
            <span className="font-medium text-black">Contact No:</span>
            <span>{item.contactNo}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-rose-600 w-4 h-4" />
            <span className="font-medium text-black">Location:</span>
            <span>{item.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-pink-600 w-4 h-4" />
            <span className="font-medium text-black">Found on:</span>
            <span>{new Date(item.date).toDateString()}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-3 border-t border-gray-200 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Posted: {new Date(item.createdAt).toDateString()}
          </p>
          {/* ✅ Show delete if current user is the owner */}
          {item.owner?._id === userData?._id && (
            <button
              onClick={() => handleDelete(item._id)}
              className="mt-2 px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
