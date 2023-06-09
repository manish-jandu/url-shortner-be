const express = require("express");
const router = express.Router();

const {getRoot} = require("../controller/urlController");


router.route("/").get(getRoot);

module.exports = router;


