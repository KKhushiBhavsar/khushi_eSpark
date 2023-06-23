const express = require("express");
const app = express();
const user = require("./routes/users.route");
const company = require("./routes/company.route");
app.use(express.json());
app.use(user, company);
app.listen(2000);
console.log("port is listening");
