var express = require("express");
var router = express.Router();

const userController = require("../controller/user");
const profileController = require("../controller/profile");

/* image  */

router.post("/api/user", userController.add);

// /* video  */
router.post("/api/profile", profileController.add);

module.exports = router;
