import express from "express";
import { isCustomer } from "../middleware/authentication.middleware.js";
import { validateReqBody } from "../middleware/validation.middleware.js";
import { vehicleValidationSchema } from "./vehicle.validation.js";
import { Vehicle } from "./vehicle.model.js";

const router = express.Router();

//request vehicle problem
router.post(
  "/register/vehicle",
  isCustomer,
  validateReqBody(vehicleValidationSchema),
  async (req, res) => {
    //extract new product from req.body
    const newVehicle = req.body;
    //add seller
    newVehicle.CustomerId = req.loggedInUserId;

    //add product
    await Vehicle.create(newVehicle);
    // send appropriate response
    return res.status(201).send({ message: "Vehicle requested successfully." });
  }
);

export default router;
