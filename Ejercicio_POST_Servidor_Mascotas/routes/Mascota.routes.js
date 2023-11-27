const { Router } = require("express");
const routes = Router();
const { getAllmascotas,savemascota, editMascota, deleteMascota } = require('../controllers/Mascota.controller')

routes.get("/getMascotas", getAllmascotas);

routes.post("/saveMascota", savemascota);

routes.put("/editMascota/:id?", editMascota);

routes.delete("/deleteMascota/:id?",deleteMascota)

module.exports = routes;