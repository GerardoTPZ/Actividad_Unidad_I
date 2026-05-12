const express = require('express');
const cors = require('cors');
const validateApiKey = require('./middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use(validateApiKey);

let tareas = [];
let metas = [];

app.get('/tareas', (req, res) => {
    res.status(200).json(tareas);
});

app.get('/metas', (req, res) => {
    res.status(200).json(metas);
});

app.post('/tareas', (req, res) => {

    const { name, description, dueDate } = req.body;

    if (!name || !description || !dueDate) {
        return res.status(400).json({
            message: 'Parámetros incorrectos'
        });
    }

    const nuevaTarea = {
        id: tareas.length + 1,
        name,
        description,
        dueDate
    };

    tareas.push(nuevaTarea);

    res.status(200).json({
        message: 'Tarea agregada correctamente',
        data: nuevaTarea
    });
});

app.post('/metas', (req, res) => {

    const { name, description, dueDate } = req.body;

    if (!name || !description || !dueDate) {
        return res.status(400).json({
            message: 'Parámetros incorrectos'
        });
    }

    const nuevaMeta = {
        id: metas.length + 1,
        name,
        description,
        dueDate
    };

    metas.push(nuevaMeta);

    res.status(200).json({
        message: 'Meta agregada correctamente',
        data: nuevaMeta
    });
});

app.delete('/tareas/:id', (req, res) => {

    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({
            message: 'ID incorrecto'
        });
    }

    tareas = tareas.filter(tarea => tarea.id !== id);

    res.status(200).json({
        message: 'Tarea eliminada correctamente'
    });
});

app.delete('/metas/:id', (req, res) => {

    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({
            message: 'ID incorrecto'
        });
    }

    metas = metas.filter(meta => meta.id !== id);

    res.status(200).json({
        message: 'Meta eliminada correctamente'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});