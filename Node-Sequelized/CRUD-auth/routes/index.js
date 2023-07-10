const express = require("express");
const router = express.Router();
const authJwt = require("../middleware/authJwt");
const verifySignup = require("../middleware/verifySignup");

const userRoutes = require("../controller/user.controller");
const authRoutes = require("../controller/auth.controller");
const propertyRoutes = require("../controller/property.controller");
/** AUTH ROUTES */
router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameorEmail, verifySignup.checkRoleExisted],
  authRoutes.signup
);
router.post("/signin", authRoutes.signin);

/** USER ROUTES */
router.get(
  "/user-panel",
  [authJwt.verifyToken, authJwt.isUser],
  userRoutes.userBoard
);
router.get(
  "/admin-panel",
  [authJwt.verifyToken, authJwt.isAdmin],
  userRoutes.adminBoard
);
router.get("/all", userRoutes.allAccess);

/** PROPERTY ROUTES */
router.post("/add-property", [authJwt.verifyToken], propertyRoutes.addProperty);
router.get(
  "/all-properties",
  [authJwt.verifyToken],
  propertyRoutes.showAllProperties
);
router.get(
  "/property/:PropertyId",
  [authJwt.verifyToken],
  propertyRoutes.showPropertyOfUser
);

router.delete(
  "/property/:PropertyId",
  [authJwt.verifyToken],
  propertyRoutes.deleteProperty
);
router.put(
  "/property/:PropertyId",
  [authJwt.verifyToken],
  propertyRoutes.updateProperty
);
module.exports = router;
