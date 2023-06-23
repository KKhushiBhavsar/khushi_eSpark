var express = require("express");
var router = express.Router();

const todoController = require("../controller/todo.controller");
router.post("/add-todo", todoController.addTodo);
router.get("/todo", todoController.getAllTodo);
router.put("/change-todo/:id", todoController.updateTodo);
router.delete("/delete-todo/:id", todoController.deleteTodo);
router.get("/get-todo", todoController.pagination);
router.get("/search-todo", todoController.searching);
router.get("/sorting", todoController.sorting);
router.get("/to-do", todoController.allFuntionTodo);
module.exports = router;
