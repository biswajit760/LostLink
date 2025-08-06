import ReportItem from "../model/ReportItem.model.js";
import uploadOnCloudinary from "../config/cloudinary.js";

export const addReportItem = async (req, res) => {
  try {
    const {
      reportType,
      itemName,
      description,
      date,
      location,
      contactNo,
    } = req.body;

    if (!reportType || !itemName || !description || !date || !location || !contactNo) {
      return res.status(400).json({ message: "Fill all the Details" });
    }

    // ✅ Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // ✅ Upload to Cloudinary
    const result = await uploadOnCloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const imageUrl = result.secure_url;

    const newItem = new ReportItem({
      reportType,
      itemName,
      description,
      date,
      location,
      contactNo,
      imageUrl,
      owner: req.user._id,
    });

    await newItem.save();

    res.status(201).json({
      success: true,
      message: "Item reported successfully.",
      item: newItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await ReportItem.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
}




export const getFoundItems = async (req, res) => {
  try {
    const items = await ReportItem.find({ reportType: "found" })
      .sort({ createdAt: -1 })
      .populate("owner", "name email"); // populate with selected fields

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
};



export const getLostItems = async (req, res) => {
  try {
    const items = await ReportItem.find({ reportType: "lost" })
      .sort({ createdAt: -1 })
      .populate("owner", "name email");

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
};

