const { request } = require("express");
const db = require("../models");
const user = require("../models/user");
const users = db.user;
const addCompany = async (req, res) => {
  const company = req.body;
  const response = await db.company.create({
    include: [{ model: users }],
  });
  res.send(response);
};
const getCompany = async (req, res) => {
  // const company = req.body;
  const response = await db.company.findAll({
    // include: [{ model: users }],
    company,
  });

  console.log(response);
  // res.send(response);
};
// getCompany();
module.exports = { addCompany, getCompany };
