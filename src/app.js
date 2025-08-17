const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Vijayakanth",
    lastName: "Grandhi",
    email: "vijayakanth.grandhi@gmail.com",
    password: "Vijay@1234",
  };
  //create a new user instance of the User model and save it
  const user = new User(userObj);
  await user
    .save()
    .then(() => {
      console.log("User saved successfully");
      res.status(201).send("User created successfully");
    })
    .catch((error) => {
      console.error("Error saving user:", error);
      res.status(500).send("Error saving user");
    });
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  });
