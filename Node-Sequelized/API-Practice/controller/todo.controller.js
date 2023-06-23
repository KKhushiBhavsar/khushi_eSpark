const req = require("express/lib/request");
const res = require("express/lib/response");
const { Op } = require("sequelize");
const { List } = require("../models");

const addTodo = async (req, res) => {
  try {
    const list = await List.create({
      task: req.body.task,
      who: req.body.who,
      dueDate: req.body.dueDate,
      done: req.body.done,
    });
    res.json({ data: list });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getAllTodo = async (req, res) => {
  try {
    const list = await List.findAll();
    console.log(list);
    res.send(list);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) return res.send(404).end();
  try {
    const response = await List.update(
      {
        task: req.body.task,
        who: req.body.who,
        dueDate: req.body.dueDate,
        done: req.body.done,
      },
      {
        where: { id: id },
      }
    );
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) return res.send(404).end();
  try {
    const respose = await List.destroy({ where: { id: id } });
    res.send("success");
  } catch (error) {
    res.status(404).send(error);
  }
};

const pagination = async (req, res) => {
  let limit = 3;
  console.log(req.query.page);
  let offset = 0 + (req.query.page - 1) * limit;
  console.log(limit, offset);
  try {
    const response = await List.findAll({
      offset: offset,
      limit: limit,
    });
    res.send(response);
  } catch (error) {
    res.send(error).end();
  }
};
const searching = async (req, res) => {
  var searchField = Object.entries(JSON.parse(req.query.where))[0];
  var search = searchField[0];
  var value = searchField[1];
  try {
    const searchField = await List.findAll({
      where: {
        [Op.or]: [{ [search]: { [Op.like]: "%" + value + "%" } }],
      },
    });
    res.send(searchField);
  } catch (error) {
    console.log(error);
    res.send(error).end();
  }
};
const sorting = async (req, res) => {
  const sortField = Object.entries(JSON.parse(req.query.sort))[0];
  try {
    const sortedField = await List.findAll({
      order: [[sortField[0], sortField[1]]],
    });
    res.send(sortedField);
  } catch (error) {
    console.log(error);
    res.send(error).end();
  }
};
const allFuntionTodo = async (req, res) => {
  if (req.params.sort) {
    var sortField = Object.entries(JSON.parse(req.query.sort))[0];
  }
  let limit = 3;
  if (req.params.page) {
    console.log(req.query.page);
    let offset = 0 + (req.query.page - 1) * limit;
  }

  if (req.query.where) {
    var searchField = Object.entries(JSON.parse(req.query.where))[0];
  }
  try {
    const result = await List.findAll({
      where: req.query.where
        ? {
            [Op.or]: [
              {
                [searchField[0]]: { [Op.like]: "%" + searchField[1] + "%" },
              },
            ],
          }
        : null,

      order: req.params.sort
        ? [
            [sortField?.[0], sortField?.[1]],
            // ["name", "ASC"],
          ]
        : null,
      limit: limit,
      offset: req.params.page ? offset : 1,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error).end();
  }
};
module.exports = {
  addTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
  pagination,
  searching,
  sorting,
  allFuntionTodo,
};
