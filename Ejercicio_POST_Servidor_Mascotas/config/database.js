const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Mascota",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Conexion exitosa a la Base de Datos MongoDB")
})
.catch((error)=>{
    console.log("Error al conectar la base de datos MongoDB: ",error)
});