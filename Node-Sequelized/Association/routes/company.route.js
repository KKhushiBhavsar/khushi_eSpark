const express = require("express");
const route = express.Router();
const company = require("../controller/company.controller");

route.post("/addCompany", company.addCompany);
route.get("/getCompany", company.getCompany);

module.exports = route;
