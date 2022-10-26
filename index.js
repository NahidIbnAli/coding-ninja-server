const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Server is okay");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => console.log("server is running on port", port));
