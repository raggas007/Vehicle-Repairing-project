import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  vehicleCategory: {
    name: String,
    required: true,
    trim: true,
    enum: [
      "Two Wheeler Without Gear",
      "Two Wheeler With Gear",
      "Three Wheeler",
      "Four Wheeler",
    ],
  },
  vehicleNumber: {
    name: String,
    required: true,
    trim: true,
    maxLength: 15,
  },
  vehicleName: {
    name: String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  vehicleBrand: {
    name: String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  problemDescription: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
});

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
