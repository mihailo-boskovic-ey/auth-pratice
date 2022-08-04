const express = require("express");
const { getPrivateData } = require("../controller/private");
const { protec } = require("../middleware/auth.middleware");
const router = express.Router();

router.route("/").get(protec, getPrivateData);

module.exports = router;
