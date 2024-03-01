import mongoose from "mongoose";

//set rules(Schema)
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 55,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 55,
  },
  email: {
    type: String,
    required: true,
    maxLength: 20,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxLength: 55,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Customer", "Mechanic"],
  },
  skills: {
    type: String,
    required: false,
    trim: true,
    default: null,
  },
  image: {
    type: String,
    required: false,
    trim: true,
    default: null,
  },
});

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

//create tables.

export const User = mongoose.model("User", userSchema);
