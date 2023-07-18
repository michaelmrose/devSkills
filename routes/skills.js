var express = require("express");
var router = express.Router();
const skillsController = require("../controllers/skills");

router.get("/", skillsController.all);
router.get("/new", skillsController.new)
router.get("/:id", skillsController.one);
router.post("/", skillsController.create)
router.delete("/:id", skillsController.delete)

module.exports = router;
