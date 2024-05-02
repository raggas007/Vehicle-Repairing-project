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
    vehicleNumber: {
      type: String,
      required: true,
      trim: true,
      maxLength: 15,
    },
    vehicleName: {
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
