const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello, dev!");
});
app.use("/hello", (req, res) => {
  res.send("Hello Helloo, World!");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
