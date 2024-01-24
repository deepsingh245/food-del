const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
  },
  location: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const newUser = mongoose.model("users", UserSchema);
module.exports = newUser;
