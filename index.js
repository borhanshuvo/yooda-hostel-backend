// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config();

// internal imports
const foodItemsRoute = require("./routers/foodItemRouter");
const studentsRoute = require("./routers/studentRouter");
const distributionRoute = require("./routers/distributionRouter");

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Databae Connected"))
  .catch((err) => console.log(err));

// Request process
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route
app.get("/", (req, res) => {
  res.send("Hey, Buddy!!! What's up!");
});

app.use("/foodItem", foodItemsRoute);
app.use("/student", studentsRoute);
app.use("/distribution", distributionRoute);

app.listen(process.env.PORT, () => {
  console.log(`app listening at ${process.env.PORT}`);
});
