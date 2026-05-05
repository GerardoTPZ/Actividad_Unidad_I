# Todo Backend - Node.js + Express

## 📌 Descripción

Backend para gestionar tareas y metas (To Do List).

## ⚙️ Requisitos

* Node.js instalado

## 📥 Instalación

npm install

## ▶️ Ejecución

node app.js

## 🔐 Autorización

Todas las peticiones requieren el header:

Authorization: 123456

## 📡 Endpoints

### Tareas

* GET /getTasks
* POST /addTask
* DELETE /removeTask/:id

### Metas

* GET /getGoals
* POST /addGoal
* DELETE /removeGoal/:id

## 🧪 Pruebas con Postman

Se incluye archivo "postman_collection.json" para probar los endpoints.

Importar en Postman:

1. Abrir Postman
2. Click en "Import"
3. Seleccionar el archivo

