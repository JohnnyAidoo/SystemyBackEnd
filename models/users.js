const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  displayPicture: String,
  dateRegistered: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", UserSchema);
