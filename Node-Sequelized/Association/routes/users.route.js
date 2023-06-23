const express = require("express");
const route = express.Router();
const user = require("../controller/user.controller");

route.post("/addUser", user.addUser);

module.exports = route;
