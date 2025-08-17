const express = require("express");

const app = express();
app.use("/", (err, req, res, next) => {
  if (err) {
    console.error("Error occurred:", err.message);
    return res.status(500).json({ error: "something went wrong" });
  }
  console.log("Middleware executed");
  next();
});
app.get("/getAllData", (req, res) => {
  try {
    throw new Error("This is an error");
    res.json({ message: "All data retrieved successfully" });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
