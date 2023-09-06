var express = require("express");
var router = express.Router();
const { signUp } = require("./controller");
const multer = require("multer");
const os = require("os");

router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), signUp);

module.exports = router;
