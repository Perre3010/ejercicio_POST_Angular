const { Router } = require("express");
const routes = Router();
const { getAllmascotas,savemascota } = require('../controllers/Mascota.controller')

routes.get("/getMascotas", getAllmascotas);

routes.post("/saveMascotas", savemascota);

module.exports = routes;