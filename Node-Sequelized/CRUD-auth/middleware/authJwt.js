const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const { User } = require("../models");

verifyToken = async (req, res, next) => {
  let token = req.headers["authorization"];
  console.log(":::::;Token:::::::", req.headers);
  if (!token) {
    return res.status(300).send({ message: "Token is not provided" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(403).send({
        message: "Incorrect Token",
      });
    }
    req.userId = decoded.id;
    console.log("!Decoded~!", decoded);
    next();
  });
};
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((role) => {
      for (let i = 0; i < role.length; i++) {
        if (role[i].name === "Admin") {
          next();
          return;
        }
      }
    });
  });
};
isUser = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((role) => {
      for (let i = 0; i < role.length; i++) {
        if (role[i].name === "User") {
          next();
          return;
        }
      }
    });
  });
};
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isUser: isUser,
};

module.exports = authJwt;
