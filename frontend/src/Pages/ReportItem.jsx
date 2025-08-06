import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { authDataContext } from '../context/AuthContext';

const ReportItem = () => {
  const { loading, setLoading } = useContext(authDataContext);
  const { serverUrl } = useContext(authDataContext);
  
  const [formData, setFormData] = useState({
    reportType: "lost",
    itemName: "",
    description: "",
    date: "",
    location: "",
    contactNo: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const imageFile = files[0];
      setFormData({ ...formData, image: imageFile });
      setPreviewImage(URL.createObjectURL(imageFile));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await axios.post(`${serverUrl}/api/item/add`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Item reported successfully!");
      console.log("Success:", res.data);

      // Reset form
      setFormData({
        reportType: "lost",
        itemName: "",
        description: "",
        date: "",
        location: "",
        contactNo: "",
        image: null,
      });
      setPreviewImage(null);
    } catch (err) {
       console.error(err);
  } finally{
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-black border border-gray-300 rounded-full p-4 shadow hover:bg-gray-800 transition cursor-pointer"
        title="Back to Home"
      >
        <IoIosArrowBack className="text-xl text-white" />
      </button>

      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300">
        {/* Left Section: Form */}
        <div className="md:w-1/2 p-8 lg:p-12">
          <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-3 text-black pb-2 border-b-2 border-gray-600 mb-8">
            <span role="img" aria-label="report emoji">🧾</span> Report an Item
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
            {/* Report Type */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">I want to:</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="reportType"
                    value="lost"
                    checked={formData.reportType === "lost"}
                    onChange={handleChange}
                    className="accent-red-600 w-4 h-4"
                  />
                  <span>Report a Lost Item</span>
                </label>
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="reportType"
                    value="found"
                    checked={formData.reportType === "found"}
                    onChange={handleChange}
                    className="accent-green-600 w-4 h-4"
                  />
                  <span>Report a Found Item</span>
                </label>
              </div>
            </div>

            {/* Item Name */}
            <div>
              <label htmlFor="itemName" className="block text-gray-800 font-semibold mb-2">Item Name</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 text-gray-800"
                placeholder="e.g. Black Leather Wallet, Silver Watch"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-gray-800 font-semibold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-400 rounded-lg px-4 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 text-gray-800"
                placeholder="Provide a detailed description..."
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="imageUpload" className="block text-gray-800 font-semibold mb-2">Upload Item Image (optional)</label>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-gray-300 file:text-gray-900 hover:file:bg-gray-400 cursor-pointer transition duration-200"
              />
              {previewImage && (
                <div className="mt-4 border border-gray-300 rounded-lg p-2 flex justify-center items-center bg-gray-100">
                  <img
                    src={previewImage}
                    alt="Item Preview"
                    className="max-h-48 w-auto rounded-md object-contain grayscale"
                  />
                </div>
              )}
            </div>

            {/* Date & Location */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="date" className="block text-gray-800 font-semibold mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 text-gray-800"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="location" className="block text-gray-800 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 text-gray-800"
                  placeholder="e.g. Library, Cafeteria"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <label htmlFor="contactNo" className="block text-gray-800 font-semibold mb-2">Contact Information</label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 text-gray-800"
                placeholder="Phone number or email"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Submit Report
            </button>
          </form>
        </div>

        {/* Right Section: Illustration */}
        <div className="md:w-1/2 bg-gradient-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center p-8 rounded-r-2xl">
          <img
            src="/Searching.png"
            alt="Lost and Found Illustration"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportItem;
