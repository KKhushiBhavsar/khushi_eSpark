const express = require("express");
const app = express();
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.listen(5000);
console.log("port is listening");
