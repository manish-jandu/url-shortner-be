const express = require("express");
const router = express.Router();
const {register,login,currentUser} = require('../controller/userController');

router.route("/register").post(register).get(login);
router.route("/login").get(login);
router.route("/current").get(currentUser);


module.exports = router