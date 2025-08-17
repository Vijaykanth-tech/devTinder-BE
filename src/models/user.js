const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});
// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
