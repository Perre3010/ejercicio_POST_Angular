const mascotaModel = require("../models/MascotaModel");

const controller = {};

//MListar todas las mascotas
controller.getAllmascotas = async (req, res) => {
  const listmascota = await mascotaModel.find();
  res.json(listmascota);
};

//Guardar nueva mascota
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

//Editar una amscota
controller.editMascota = async (req,res)=>{
  try {
    const id = req.params.id;
    const updatedData = req.body;
    
    // Verificar si la mascota existe por ID
    const existingMascota = await mascotaModel.findById(id);
    if (!existingMascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }

    // Actualizar la mascota con los nuevos datos
    await mascotaModel.findByIdAndUpdate(id, updatedData);
    
    res.status(200).json({ message: 'Mascota actualizada exitosamente' });
  } catch (error) {
    console.error('Error al editar la mascota:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

//Eliminar una mascota
controller.deleteMascota = async(req,res) =>{
  try {
    const { id } = req.params;

    // Verificar si la mascota existe por ID
    const existingMascota = await mascotaModel.findById(id);
    if (!existingMascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }

    // Eliminar la mascota por ID
    await mascotaModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Mascota eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la mascota:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

module.exports = controller;