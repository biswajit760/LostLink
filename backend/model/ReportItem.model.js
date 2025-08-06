import mongoose from "mongoose";


const reportItemSchema = new mongoose.Schema({
  reportType: {
    type: String,
    enum: ['lost', 'found'],
    required: true,
  },
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  contactNo: { // Renamed from contactInfo to contactNo
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReportItem = mongoose.model('ReportItem', reportItemSchema);

export default ReportItem;