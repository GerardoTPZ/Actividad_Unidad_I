const express = require("express");
const router = express.Router();

let tasks = [];

// GET
router.get("/getTasks", (req, res) => {
    res.json(tasks);
});

// POST
router.post("/addTask", (req, res) => {
    const newTask = {
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        date: req.body.date
    };

    tasks.push(newTask);
    res.json(newTask);
});

// DELETE
router.delete("/removeTask/:id", (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({ message: "Tarea eliminada" });
});

module.exports = router;