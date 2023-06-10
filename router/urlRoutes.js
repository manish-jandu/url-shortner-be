const express = require("express");
const router = express.Router();

const {
    getAllUrls,
    createUrl,
    getAUrl,
    deleteAUrl
} = require("../controller/urlController");


router.route("/").get(getAllUrls).post(createUrl);

router.route("/:id").get(getAUrl).delete(deleteAUrl);

module.exports = router;


