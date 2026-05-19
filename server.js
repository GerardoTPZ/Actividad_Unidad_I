require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const Task = require("./models/Task");
const Goal = require("./models/Goal");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/getTasks", async(req,res)=>{

    try{

        const tasks = await Task.find();

        res.json(tasks);

    }
    catch(error){

        res.status(500).json(error);

    }

});

app.get("/getGoals", async(req,res)=>{

    try{

        const goals = await Goal.find();

        res.json(goals);

    }
    catch(error){

        res.status(500).json(error);

    }

});

app.post("/addTask", async(req,res)=>{

    try{

        const task = new Task({

            title:req.body.title,

            description:req.body.description,

            deadline:req.body.deadline

        });

        await task.save();

        res.json(task);

    }
    catch(error){

        res.status(500).json(error);

    }

});

app.post("/addGoal", async(req,res)=>{

    try{

        const goal = new Goal({

            title:req.body.title,

            deadline:req.body.deadline

        });

        await goal.save();

        res.json(goal);

    }
    catch(error){

        res.status(500).json(error);

    }

});

app.delete("/removeTask/:id", async(req,res)=>{

    try{

        await Task.findByIdAndDelete(
            req.params.id
        );

        res.json({

            message:"Tarea eliminada"

        });

    }
    catch(error){

        res.status(500).json(error);

    }

});

app.delete("/removeGoal/:id", async(req,res)=>{

    try{

        await Goal.findByIdAndDelete(
            req.params.id
        );

        res.json({

            message:"Meta eliminada"

        });

    }
    catch(error){

        res.status(500).json(error);

    }

});

app.listen(
    process.env.PORT,
    ()=>{

        console.log(
            "Servidor iniciado"
        );

    }
);