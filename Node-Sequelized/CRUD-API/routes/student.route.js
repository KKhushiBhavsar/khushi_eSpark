const express = require("express");
const route = express.Router();
const student = require("../controllers/student.controller");

route.post("/addstudent", student.addStudent);
route.delete("/delete-student/:id", student.deleteStudent);
route.get("/all-students", student.getAllStudent);
route.get("/student/:id", student.getStudent);
route.put("/update-student/:id", student.updateStudent);
module.exports = route;
