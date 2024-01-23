const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fisrtname: {
    type: String,
    required: [true, "Please provide your name"],
  },
  lastname: {
    type: String,
    required: [true, "Please provide your name"],
  },
  location: {
    type: String,
    required: true,
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

const newUser = mongoose.model("users2", UserSchema);
module.exports = newUser;
