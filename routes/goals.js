const express = require("express");
const router = express.Router();

let goals = [];

// GET
router.get("/getGoals", (req, res) => {
    res.json(goals);
});

// POST
router.post("/addGoal", (req, res) => {
    const newGoal = {
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        date: req.body.date
    };

    goals.push(newGoal);
    res.json(newGoal);
});

// DELETE
router.delete("/removeGoal/:id", (req, res) => {
    const id = parseInt(req.params.id);

    goals = goals.filter(goal => goal.id !== id);

    res.json({ message: "Meta eliminada" });
});

module.exports = router;