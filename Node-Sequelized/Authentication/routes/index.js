var express = require("express");
var router = express.Router();

var authComponent = require("../controllers/auth.controller");
var userComponent = require("../controllers/user.controller");
const authJwt = require("../middleware/authJWT");
const verifySignUp = require("../middleware/verfiySignUp");

/** auth routes */
router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRoleExisted],
  authComponent.signup
);
router.post("/signin", authComponent.signin);

// /** user routes */

router.get("/user-panel", [authJwt.verifyToken], userComponent.userBoard);
router.get(
  "/admin-panel",
  [authJwt.verifyToken, authJwt.isAdmin],
  userComponent.adminBoard
);
router.get(
  "/moderate-panel",
  [authJwt.verifyToken, authJwt.isModerator],
  userComponent.moderatorBoard
);
router.get("/all", userComponent.allAccess);
module.exports = router;
