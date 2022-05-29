const mongoose = require("mongoose"); //exportamos una instncia de moongose
let PersonSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  tipoSangre: String,
  nss: String,
}); //Generamos el schema para person
module.exports = mongoose.model("persons", PersonSchema); //exportamos el modelo con el schema
