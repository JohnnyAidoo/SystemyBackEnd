const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
//json
app.use(express.json());

//mongoose
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("connected to db");
});
const db = mongoose.connection;

//  Routes
// users routes
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

app.listen(3001, () => {
  console.log("Running");
});
