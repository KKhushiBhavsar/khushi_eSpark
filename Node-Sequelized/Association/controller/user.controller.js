const { request } = require("express");
const db = require("../models");
const company = db.company;
const addUser = async (req, res) => {
  const user = req.body;
  const response = await db.user.create(user);
  res.send(response);
};
const getUser = async (req, res) => {
  const response = await db.user.findAll({
    include: [{ model: company }],
  });
  console.log(response);
};
getUser();
module.exports = { addUser, getUser };
