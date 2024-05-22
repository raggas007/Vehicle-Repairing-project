import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    vehicleCategory: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Two Wheeler Without Gear",
        "Two Wheeler With Gear",
        "Three Wheeler",
        "Four Wheeler",
      ],
    },
    customerName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
    },
    vehicleNumber: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    vehicleBrand: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    payment: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      required: false,
      enum: ["Pending", "Completed"],
    },
    problemDescription: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
