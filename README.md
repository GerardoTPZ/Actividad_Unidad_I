# Actividad Unidad V - To Do Backend



## Configuración

Crear un archivo `.env` tomando como referencia `.env.example`
Moverse a la ruta donde se clono o descargo el proyecto en cmd.

Creacion de notepad:
notepad .env

Y pegar el contenido:

MONGO_URI=mongodb://127.0.0.1:27017/todolist
PORT=3000

## Instalación

npm install

## Ejecutar

npm start

## Endpoints

GET /getTasks
GET /getGoals

POST /addTask
POST /addGoal

DELETE /removeTask/:id
DELETE /removeGoal/:id