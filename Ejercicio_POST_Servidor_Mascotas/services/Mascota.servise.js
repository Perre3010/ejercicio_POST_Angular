const mascotaModel = require("../models/MascotaModel");

const getAllmascotas = async () => {
  return await mascotaModel.find();
};

module.exports = { getAllmascotas };