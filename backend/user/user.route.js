import express from "express";
import {
  loginUserValidationSchema,
  userValidationSchema,
} from "./user.validation.js";
import { User } from "./user.model.js";
import {
  comparePassword,
  generatehashPassword,
} from "../utils/password.function.js";
import { validateReqBody } from "../middleware/validation.middleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

//register user

router.post(
  "/register/user",
  validateReqBody(userValidationSchema),
  async (req, res) => {
    //extract newUser from req.body

    const newUser = req.body;
    //check for email already exist
    const user = await User.findOne({ email: newUser.email });

    //if email throw errors

    if (user) {
      return res.status(409).send({ message: "email is already exist" });
    }
    //hash password
    const hashedPassword = await generatehashPassword(newUser.password);

    newUser.password = hashedPassword;

    //create user
    await User.create(newUser);

    //give appropriate response
    return res.status(201).send({ message: "user registered successfully." });
  }
);

router.post(
  "/login/user",
  validateReqBody(loginUserValidationSchema),
  async (req, res, next) => {
    //extract newCredentials from req.body
    const newCredentials = req.body;
    //check if email exists
    const user = await User.findOne({ email: newCredentials.email });

    // if not email exist throw errors
    if (!user) {
      return res.status(409).send({ message: "invalid credentials" });
    }

    //compare hash password
    const isPasswordmatch = await comparePassword(
      newCredentials.password,
      user.password
    );

    //if not password match throw error

    if (!isPasswordmatch) {
      return res.status(409).send({ message: "invalid credentials" });
    }
    // login is successfull, give token
    let payload = { userId: user._id };
    const token = await jwt.sign(
      payload,
      "72d2832f509f9ef1ad231d9b9f0e91f78ad68e2108ce5205cad24b7b2667a741",
      { expiresIn: "1d" }
    );

    //send appropriate response
    return res.status(200).send({
      message: "login is successfull",
      token: token,
      userDetails: user,
    });
  }
);

export default router;
