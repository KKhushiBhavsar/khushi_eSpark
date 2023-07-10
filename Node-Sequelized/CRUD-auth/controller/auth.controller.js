const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const config = require("../config/auth.config");
const { User, Role } = require("../models");

exports.signup = async (req, res, next) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        console.log("!!!req.body.roles", req.body.roles);
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({
              message: "Registration Successful",
            });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({
            message: "Registration Successful",
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = async (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "user not found " });
      }

      var isPasswordValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!isPasswordValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      const token = jwt.sign({ id: user.id }, config.secret);
      console.log("token", token);
      var authentication = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authentication.push("ROLE_" + roles[i].name.toUpperCase());
        }
        // console.log("::::::authentication::::::", authentication);
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authentication,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
