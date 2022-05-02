const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar db");
  }
};

module.exports = { dbConection };
