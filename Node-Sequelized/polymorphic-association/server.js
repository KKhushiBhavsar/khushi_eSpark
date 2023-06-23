const express = require("express");
const app = express();
const routes = require("./routes/index");

// routes.use(express.json);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(bodyParser.json());
app.use(routes);
app.listen(8000);
console.log("port is listening");
