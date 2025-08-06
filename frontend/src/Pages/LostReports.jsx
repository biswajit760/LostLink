import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import LostItemCard from "../Components/LostItemCard";
import { authDataContext } from '../context/AuthContext';

const LostReports = () => {
     const [lostItems, setLostItems] = useState([]);
     const { serverUrl } = useContext(authDataContext);

     let navigate = useNavigate();

     useEffect(() => {
       const fetchLostItems = async () => {
         try {
           const response = await axios.get(
             `${serverUrl}/api/item/report/lost`
           ); // 👈 Adjust base URL if needed
           setLostItems(response.data);
         } catch (error) {
           console.error("Error fetching Lost items:", error.message);
         }
       };

       fetchLostItems();
     }, []);

  return (
    
    <div className="min-h-screen bg-gray-50 py-5 px-4 relative">
      {/* Heading of the page */}
      <div className="text-center ">
        <h1 className="text-5xl space-x-2  font-bold text-black">
          <span className="text-black  font-semibold">Latest </span>
          <span className=" text-gray-600">Lost</span>
          <span className="text-5xl font-bold text-black relative inline-block mt-2  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-black after:rounded-full after:transition-all after:duration-300 hover:after:w-1/2 ">Reports</span>
        </h1>
      </div>
      {/* Back to Home Button */}
              <button
                onClick={() => navigate("/")}
                className="absolute top-15  left-4 bg-black border border-gray-300 rounded-full p-4 shadow hover:bg-gray-800 transition cursor-pointer "
                title="Back to Home"
              >
                <IoIosArrowBack className="text-xl text-white" />
              </button>
      <div className="mt-12 p-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lostItems.map((item, index) => (
          
          <LostItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default LostReports