const express = require("express");
const router = express.Router();

const {redirect} = require("../controller/redirectController");

router.route("/:id").get(redirect);

module.exports = router