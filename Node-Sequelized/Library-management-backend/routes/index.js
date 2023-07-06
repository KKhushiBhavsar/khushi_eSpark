var express = require("express");
var router = express.Router();

var studentComponent = require("../controller/students");
var staffComponent = require("../controller/staffs");
var bookComponent = require("../controller/books");

/** STUDENT ROUTES */

router.get("/get-student", studentComponent.getStudentDetails);

/** STAFF ROUTES */

router.get("/get-staff", staffComponent.getStaffDetails);

/** BOOK ROUTES */

router.get("/get-book", bookComponent.getBooksDetails);
module.exports = router;
