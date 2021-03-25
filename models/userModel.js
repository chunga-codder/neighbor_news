const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // The email cannot be null, and must be a proper email before creation
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User 
