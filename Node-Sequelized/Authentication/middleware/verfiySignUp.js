const { Role, User } = require("../models");
checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
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
          message: "Failed! Email is already in use!",
        });
        return;
      }

      next();
    });
  });
};
checkRoleExisted = (req, res, next) => {
  if (req.body.Role) {
    for (let i = 0; i < req.body.Role.length; i++) {
      if (!Role.includes(req.body.Role[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.Role[i],
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRoleExisted: checkRoleExisted,
};

module.exports = verifySignUp;
