import express from "express";
import connectDB from "./connect.db.js";
import userRoutes from "./user/user.route.js";

const app = express();

//to make json understand
app.use(express.json());

//connect database
connectDB();

// register routes
app.use(userRoutes);

//app port and server
const port = 6000;

app.listen(port, () => {
  console.log(`App is listening to the port ${port}`);
});
