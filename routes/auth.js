const express = require("express");
const {
  register,
  login,
  resetpass,
  forgotpass,
} = require("../controller/auth.js");
const { middle1, middle2 } = require("../middleware/test.middleware.js");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpass);
router.route("/resetpassword/:resetToken").put(resetpass);
// router.post("/mid", [middle1, middle2], (req, res) => {
//   console.log("Finnal funcution from the controlerrr");
// });
module.exports = router;
