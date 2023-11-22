const mascotaModel = require("../models/MascotaModel");

const controller = {};

controller.getAllmascotas = async (req, res) => {
  const listmascota = await mascotaModel.find();
  res.json(listmascota);
};

controller.savemascota = async (req, res) => {
  try {
    const body = req.body;
    const newmascota = new mascotaModel(body);

    await newmascota.save();
    res.json({message: "Mascota guardado con exito"});
  } catch (error)     {
    res.status(500).send(error.message);
  }
};

module.exports = controller;