const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const coursesName = require("./data/courses.json");
const courses = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("Server is okay");
});

app.get("/courses", (req, res) => {
  res.send(coursesName);
});
app.get("/courses/all", (req, res) => {
  res.send(courses);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => console.log("server is running on port", port));
