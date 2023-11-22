const express = require("express");
const cors = require('cors');
const mascotaRoutes = require("../routes/Mascota.routes");


const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.use(mascotaRoutes);


app.set("port", process.env.PORT || port);

module.exports = app;