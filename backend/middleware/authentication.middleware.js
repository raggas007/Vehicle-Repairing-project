import jwt from "jsonwebtoken";
import { User } from "../user/user.model.js";

export const isMechanic = async (req, res, next) => {
  //extract token from req.headers
  const authorization = req.headers.authorization;
  const splittedValues = authorization?.split(" ");

  const token = splittedValues?.length === 2 ? splittedValues[1] : undefined;

  if (!token) {
    return res.status(401).send({ message: "unauthorized1" });
  }

  let payload;
  try {
    payload = jwt.verify(
      token,
      "72d2832f509f9ef1ad231d9b9f0e91f78ad68e2108ce5205cad24b7b2667a741"
    );
  } catch (error) {
    return res.status(401).send({ message: "unauthorized2" });
  }
  //find user using userId from paylod
  const user = await User.findOne({ _id: payload.userId });
  //if not user throw error
  if (!user) {
    return res.status(401).send({ message: "unauthorized3" });
  }
  //  console.log(user);
  // if user is not mechanic throw error
  if (user.role !== "Mechanic") {
    return res.status(401).send({ message: "unauthorized4" });
  }

  req.loggedInUserId = user._id;
  // console.log(req);

  //call next function
  next();
};

export const isCustomer = async (req, res, next) => {
  //extract token from req.headers
  const authorization = req.headers.authorization;
  const splittedValues = authorization?.split(" ");

  const token = splittedValues?.length === 2 ? splittedValues[1] : undefined;

  if (!token) {
    return res.status(401).send({ message: "unauthorized1" });
  }

  let payload;
  try {
    payload = jwt.verify(
      token,
      "72d2832f509f9ef1ad231d9b9f0e91f78ad68e2108ce5205cad24b7b2667a741"
    );
  } catch (error) {
    return res.status(401).send({ message: "unauthorized2" });
  }
  //find user using userId from paylod
  const user = await User.findOne({ _id: payload.userId });
  //if not user throw error
  if (!user) {
    return res.status(401).send({ message: "unauthorized3" });
  }
  //  console.log(user);
  // if user is not customer throw error
  if (user.role !== "Customer") {
    return res.status(401).send({ message: "unauthorized4" });
  }

  req.loggedInUserId = user._id;
  // console.log(req);

  //call next function
  next();
};

export const isUser = async (req, res, next) => {
  //extract toke from req.headers
  const authorization = req.headers.authorization;
  const splittedValues = authorization?.split(" ");
  const token = splittedValues?.length === 2 ? splittedValues[1] : undefined;

  if (!token) {
    return res.status(401).send({ message: "unauthorized." });
  }
  let payload;
  try {
    payload = jwt.verify(
      token,
      "72d2832f509f9ef1ad231d9b9f0e91f78ad68e2108ce5205cad24b7b2667a741"
    );
  } catch (error) {
    return res.status(401).send({ message: "unauthorized." });
  }

  //find user using userid from payload

  const user = User.findOne({ _id: payload.userId });

  if (!user) {
    return res.status(401).send({ message: "unauthorized." });
  }
  req.loggedInUserId = user._id;

  // call next function
  next();
};
