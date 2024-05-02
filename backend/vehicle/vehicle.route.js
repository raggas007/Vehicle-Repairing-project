import express from "express";
import { isCustomer, isUser } from "../middleware/authentication.middleware.js";
import { validateReqBody } from "../middleware/validation.middleware.js";
import { vehicleValidationSchema } from "./vehicle.validation.js";
import { Vehicle } from "./vehicle.model.js";
import { checkMongoIdValidity } from "../middleware/mongo.id.validity.middleware.js";

const router = express.Router();

//request vehicle problem
router.post(
  "/register/vehicle",
  isCustomer,
  validateReqBody(vehicleValidationSchema),
  async (req, res) => {
    //extract new product from req.body
    const newVehicle = req.body;
    //add customer
    newVehicle.CustomerId = req.loggedInUserId;

    //add new vehicle request
    await Vehicle.create(newVehicle);
    // send appropriate response
    return res
      .status(201)
      .send({ message: "Vehicle Problem requested successfully." });
  }
);

//get register request
router.get(
  "/view/request/:id",
  isUser,
  checkMongoIdValidity,
  async (req, res) => {
    //extract new vehicle from req.params
    const vehicleRequestId = req.params.id;

    //find vehicle
    const vehicle = await Vehicle.findOne({ _id: vehicleRequestId });

    //if not product throw errors
    if (!vehicle) {
      return res
        .status(404)
        .send({ message: "vehicle request doesnot exist." });
    }

    //send appropriate response
    return res
      .status(200)
      .send({ message: "success", vehicleDetails: vehicle });
  }
);

export default router;
