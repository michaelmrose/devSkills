const skills = [
    { id: 1, skill: "JavaScript", level: "Beginner" },
    { id: 2, skill: "HTML", level: "Beginner" },
    { id: 3, skill: "CSS", level: "Beginner" },
    { id: 4, skill: "Java", level: "Forgot Years Ago" },
    { id: 5, skill: "Clojure", level: "Beginner" },
    { id: 6, skill: "Linux", level: "Intermediate" },
    { id: 7, skill: "Spelling", level: "Awful" },
];

function nextID() {
    return Math.max(...skills.map((x) => x.id), 0) + 1;
}

module.exports = {
    all: () => skills,
    one: (id) => skills.find((e) => e.id === id),
    delete: (id) => {
        let idx = skills.findIndex(e=>e.id === id)
        skills.splice(idx,1)
    },
    create: (obj)=>{
        obj.id = nextID()
        skills.push(obj)
    }
};
