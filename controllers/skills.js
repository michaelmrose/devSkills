const Skill = require("../models/skills");
module.exports = {
    all: (req, res) => {
        res.render("skills/index", { title: "Skills", skills: Skill.all() });
    },
    one: (req, res) => {
        let id = parseInt(req.params.id);
        res.render("skills/show", {
            title: "Skill",
            skill: Skill.one(id),
        });
    },
};
