const { request } = require("express");
const { NUMBER } = require("sequelize");
const db = require("../models");

const addStudent = async (req, res) => {
  const student = req.body;
  const studentRes = await db.student.create(student);
  res.send(studentRes);
};

const deleteStudent = async (req, res) => {
  const student = req.body;
  const sid = req.params.id;
  console.log("params", sid);
  if (isNaN(req.params.id)) return res.send(404).end();
  const response = await db.student.destroy({ where: { id: sid } });
  //   const response = await db.student.destroy(req.params.id);
  if (response === 1) {
    res.send("Success!");
  } else {
    res.send("Failed!");
  }
};

const getAllStudent = async (req, res) => {
  const student = req.body;
  const response = await db.student.findAll();
  res.send(response);
};

const getStudent = async (req, res) => {
  const student = req.body;
  if (isNaN(req.params.id)) return res.send(404).end();
  const response = await db.student.findByPk(req.params.id);
  res.send(response);
};

const updateStudent = async (req, res) => {
  const student = req.body;
  console.log("content", req.body.firstname);
  if (isNaN(req.params.id)) return res.send(404).end();
  const response = await db.student.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      department: req.body.department,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.send(response);
};
module.exports = {
  addStudent,
  deleteStudent,
  getAllStudent,
  getStudent,
  updateStudent,
};
