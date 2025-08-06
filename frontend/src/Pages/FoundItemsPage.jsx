import React, { useEffect, useState, useContext  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FoundItemCard from "../Components/FoundItemCard";
import { authDataContext } from '../context/AuthContext';


const FoundItemsPage = () => {
  const [foundItems, setFoundItems] = useState([]);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/item/report/found`);
        setFoundItems(response.data);
      } catch (error) {
        console.error("Error fetching found items:", error.message);
      }
    };

    fetchFoundItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-4 relative">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-4 bg-black border border-gray-300 rounded-full p-4 shadow hover:bg-gray-800 transition cursor-pointer"
        title="Back to Home"
      >
        <IoIosArrowBack className="text-xl text-white" />
      </button>

      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black space-x-2">
          <span className="text-gray-600 font-semibold">Latest</span>
          <span className="text-black">Item</span>
          <span className="relative inline-block mt-2 text-black font-bold text-5xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-black after:rounded-full after:transition-all after:duration-300 hover:after:w-1/2">
            Found
          </span>
        </h1>
      </div>

      {/* Found Items Grid */}
      <div className="mt-8 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foundItems.map((item, index) => (
          
          <FoundItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoundItemsPage;
