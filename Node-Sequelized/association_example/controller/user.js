const User = require("../models").User;
const Profile = require("../models").Profile;
const Role = require("../models").Role;
const UserRole = require("../models").UserRole;

const list = (req, res) => {
  return User.findAll({
    include: [
      {
        model: Profile,
        as: "profile",
      },
      {
        model: Role,
        as: "roles",
      },
    ],
  })
    .then((users) => res.status(200).send(users))
    .catch((error) => {
      res.status(400).send(error);
    });
};

const getById = (req, res) => {
  return User.findByPk(req.params.id, {
    include: [
      {
        model: Profile,
        as: "profile",
      },
      {
        model: Role,
        as: "roles",
      },
    ],
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User Not Found",
        });
      }
      return res.status(200).send(user);
    })
    .catch((error) => res.status(400).send(error));
};

const add = (req, res) => {
  return User.create({
    class_name: req.body.class_name,
  })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
};

const update = (req, res) => {
  return User.findByPk(req.params.id, {
    include: [
      {
        model: Profile,
        as: "profile",
      },
      {
        model: Role,
        as: "roles",
      },
    ],
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User Not Found",
        });
      }
      return user
        .update({
          username: req.body.username || user.username,
          password: req.body.password || user.password,
        })
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

const deleteUser = (req, res) => {
  return User.findByPk(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(400).send({
          message: "User Not Found",
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
module.exports = { list, getById, add, update, deleteUser };
