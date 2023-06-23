var express = require("express");
var router = express.Router();

const imageController = require("../controller/image");
const videoController = require("../controller/video");

/* image  */

router.post("/api/image", imageController.add);

// /* video  */
router.post("/api/video", videoController.add);

module.exports = router;
