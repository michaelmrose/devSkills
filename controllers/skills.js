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
    delete: (req,res) => {
        let id = parseInt(req.params.id)
        Skill.delete(id)
        res.redirect("/skills")
    },
    new: (req,res) => {
        res.render("skills/new", {
            title: "Add Skill",
            skill: {}
        })
    },
    create: (req,res) => {
        console.log(req.body)
        Skill.create(req.body)
        res.redirect("/skills")
    }
};
