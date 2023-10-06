const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
// app.use(express.json());
// //cors
//app.use(cors());

//mongoose
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("on", () => console.log("Connected to db"));
db.on("error", (err) => console.log("Connected to db"));

// cors

app.listen(3001, () => {
  console.log("Running");
});

//  Routes
//users routes
// const usersRoutes = require("./routes/users");
// app.use("/users", usersRoutes);
