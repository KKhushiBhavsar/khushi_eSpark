const express = require("express");
const app = express();
const routes = require("./routes/index.ts");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(2000);
console.log("port is listening on 2000");
