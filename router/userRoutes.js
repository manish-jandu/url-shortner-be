const express = require("express");
const router = express.Router();
const {register,login,currentUser} = require('../controller/userController');
const {validateToken} = require("../middleware/validateTokenHandler");

router.route("/register").post(register).get(login);
router.route("/login").get(login);
router.route("/current").get(validateToken,currentUser);


module.exports = router