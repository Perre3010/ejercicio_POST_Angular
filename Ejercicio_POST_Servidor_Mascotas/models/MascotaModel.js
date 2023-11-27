const { Schema, model, default: mongoose } = require("mongoose");

const mascotaSchema = new Schema({
    id:{
        require:[true, "Id de la mascota es requerido"],
        //type:mongoose.Schema.ObjectId
        type:String
    },

    nombre:{
        require:[true, "Nombre de la mascota es requerido"],
        type:String
    },

    edad:{
        require:[true,"Edad de la mascota es requerido"],
        type:String
    },

    especie:{
        require:[true,"Especie de la mascota es requerida"],
        type:String
    },

    raza:{
        require:[true,"Raza de la mascota es requerido"],
        type:String
    },

    color:{
        require:[true,"Color de la mascota es requerida"],
        type:String
    },
});

module.exports = model("mascotas",mascotaSchema,"mascotas");