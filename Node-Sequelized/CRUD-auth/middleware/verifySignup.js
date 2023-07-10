const { User, Role } = require("../models");

checkDuplicateUsernameorEmail = (req, res, next) => {
  User.findOne({
    where: { username: req.body.username },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Username is already exist",
      });
      return;
    }
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Email is already exist",
        });
        return;
      }
      next();
    });
  });
};

checkRoleExisted = async (req, res, next) => {
  if (req.body.Role) {
    for (let i = 0; i < req.body.Role.length; i++) {
      if (!Role.includes(req.body.Role[i])) {
        res.status(400).send({
          message: "User Role does not exist",
        });
        return;
      }
    }
  }
  next();
};
const verifySignup = {
  checkDuplicateUsernameorEmail: checkDuplicateUsernameorEmail,
  checkRoleExisted: checkRoleExisted,
};

module.exports = verifySignup;
