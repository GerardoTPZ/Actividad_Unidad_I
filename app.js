const express = require("express");
const app = express();

app.use(express.json());

// Middleware (API KEY)
app.use((req, res, next) => {
    const apiKey = req.headers.authorization;

    console.log("API KEY:", apiKey);

    if (apiKey && apiKey.trim() === "123456") {
        next();
    } else {
        res.status(401).json({ error: "No autorizado" });
    }
});

// Rutas
const tasksRoutes = require("./routes/tasks");
const goalsRoutes = require("./routes/goals");

app.use("/", tasksRoutes);
app.use("/", goalsRoutes);

// Servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});