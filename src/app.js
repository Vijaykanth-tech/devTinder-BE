const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({
    name: "John Doe",
    age: 30,
    email: "4G2M5@example.com",
  });
});

app.post("/user", (req, res) => {
  res.send({
    message: "User created successfully",
  });
});
app.delete("/user", (req, res) => {
  res.send({
    message: "User deleted successfully",
  });
});
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
