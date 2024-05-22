import express from "express";
import {
  isCustomer,
  isMechanic,
  isUser,
} from "../middleware/authentication.middleware.js";
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
    newVehicle.customerId = req.loggedInUserId;

    //add new vehicle request
    await Vehicle.create(newVehicle);
    // send appropriate response
    return res
      .status(201)
      .send({ message: "Vehicle Problem requested successfully." });
  }
);

router.get("/view/request/details", isMechanic, async (req, res) => {
  //extract vehicleId from req.params
  const vehicleId = req.params.id;
  //find Todo
  const vehicle = await Vehicle.find(vehicleId);

  //if not vehicle throw error

  if (!vehicle) {
    return res.status(404).send({ message: "no todo is found" });
  }

  //send appropriate response
  return res
    .status(200)
    .send({ message: "success", vehicleRequestDetails: vehicle });
});

//get register request
router.get(
  "/view/request/:id",
  isMechanic,
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
      .send({ message: "success", vehicleRequestDetails: vehicle });
  }
);

//delete vehicle request

router.delete(
  "/delete/request/:id",
  isMechanic,
  checkMongoIdValidity,

  async (req, res) => {
    //extract vehicle id from req.params
    const vehicleId = req.params.id;

    //find vehicle reuest
    const vehicle = await Vehicle.findOne({ _id: vehicleId });

    // if not vehicle request throw error
    if (!vehicle) {
      return res
        .status(404)
        .send({ messsage: "no any vehicle request found." });
    }

    //delete vehcile request
    await Vehicle.deleteOne({ _id: vehicleId });

    //send appropriate response
    return res
      .status(200)
      .send({ message: "vehicle request deleted successfully." });
  }
);

//edit vehicle request

router.put(
  "/edit/request/:id",
  isMechanic,
  checkMongoIdValidity,
  validateReqBody(vehicleValidationSchema),
  async (req, res) => {
    // extract product id from req.params
    const vehicleId = req.params.id;
    // find product
    const vehicle = await Vehicle.findOne({ _id: vehicleId });
    // if not product, throw error
    if (!vehicle) {
      return res.status(404).send({ message: "vehicle request doesnot exist" });
    }

    //extract new values from req.body
    const newValues = req.body;
    //update
    await Vehicle.updateOne(
      { _id: vehicleId },
      {
        $set: {
          ...newValues,
        },
      }
    );

    // send response
    return res
      .status(200)
      .send({ message: "vehicle request is updated successfully." });
  }
);

export default router;
