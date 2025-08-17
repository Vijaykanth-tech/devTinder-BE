const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
app.use(express.json()); //It is a Middleware to parse JSON request bodies in Express.js

//signup route to create a new user
app.post("/signup", async (req, res) => {
  console.log("Received request to create a new user", req.body);
  const userObj = req.body;
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

app.get("/getUser", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.find({ email: userEmail });
    console.log("Fetched user:", user);
    if (!user || user.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user");
  }
});

//get all users
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Fetched users:", users);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
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
