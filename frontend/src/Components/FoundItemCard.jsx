import React,{useContext} from "react";
import { User, Phone, MapPin, CalendarCheck } from "lucide-react";
import { authDataContext } from '../context/AuthContext';
import toast from "react-hot-toast";
import axios from "axios";


const FoundItemCard = ({ item }) => {
   const { userData, setUserData } = useContext(authDataContext);
   const { serverUrl } = useContext(authDataContext);
   const handleDelete = async () => {
      

  try {
    const response = await axios.delete(`${serverUrl}/api/item/delete/${item._id}`, {
      withCredentials: true,
    });
    toast.success("Item deleted successfully 🚮");
     setTimeout(() => {
      window.location.reload();
    }, 1000); // Add small delay so toast is visible




  } catch (error) {
    console.error("Delete Error:", error);
    toast.error("Failed to delete item ❌");
  }
};
   
  
   return (
    <div
      className="max-w-sm rounded-sm text-black overflow-hidden bg-white p-2 relative shadow-md 
                 transition-all duration-300 ease-in-out transform hover:scale-[1.015] 
                 hover:shadow-[0_10px_25px_-5px_rgba(34,197,94,0.2)]"
    >
      {/* Badge */}
      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-md z-10">
        FOUND ITEM
      </div>

      {/* Header Image */}
      <div className="flex justify-center mb-1">
        <img
          src={item.imageUrl || "https://via.placeholder.com/250"}
          alt={item.itemName || "Found Item"}
          className="w-auto h-40 object-contain"
        />
      </div>

      <div className="p-3">
        {/* Title */}
        <div className="mb-3 border-t border-gray-200 pt-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {item.itemName || "Unknown Item"}
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="mb-4 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-400 p-3 rounded-r-lg">
          <p className="font-semibold text-xs uppercase tracking-wide text-green-700 mb-2">Description</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            {item.description || "No description available"}
          </p>
        </div>

        {/* Info Grid */}
        <div className="space-y-2 mb-4">
          {/* Found By */}
          <div className="flex items-center p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
              <User className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Found by</p>
              <p className="text-gray-800 font-semibold">{item.owner?.name || "Anonymous"}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center p-2 rounded-lg bg-green-50 hover:bg-green-100 transition">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Phone className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Contact</p>
              <p className="text-gray-800 font-semibold">{item.contactNo || "Not provided"}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <MapPin className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">Found at</p>
              <p className="text-gray-800 font-semibold">{item.location || "Unknown location"}</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center p-2 rounded-lg bg-teal-50 hover:bg-teal-100 transition">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
              <CalendarCheck className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-teal-600 font-medium uppercase tracking-wide">Found on</p>
              <p className="text-gray-800 font-semibold">
                {item.date
                  ? new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Date unknown"}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">
              Posted:{" "}
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "Unknown"}
            </span>
            
            {
  userData ? (
    item.owner?._id === userData._id ? (
      <button
        onClick={() => handleDelete(item._id)}
        className="mt-2 px-3 py-1 bg-red-600 text-white rounded"
      >
        Delete
      </button>
    ) : null
  ) : null
}


          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FoundItemCard;
