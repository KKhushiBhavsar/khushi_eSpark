const express = require("express");
const app = express();
const student = require("./routes/student.route");
app.use(express.json());
app.use(student);

app.listen(2000);
console.log("port listening 2000");
