var express = require("express");
var router = express.Router();
const skillsController = require("../controllers/skills");

router.get("/", skillsController.all);
router.get("/:id", skillsController.one);

module.exports = router;
