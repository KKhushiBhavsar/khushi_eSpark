var express1 = require("express");
// const { route } = require("express/lib/application");
var router = express1.Router();

var authors = require("../controller/author");

router.post("/add-author", authors.addAuthor);
module.exports = router;
