const express = require("express");
const { dbConection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

//Crear servidor de Express
const app = express();

//base de datos
dbConection();

// CORS
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"))
 

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
