let express = require("express");
//inyeccion de la dependencia express
let app = express();
//app que hace la funcion de servidor
let personsRoute = require("./routes/person");
//incluimos el router que viene de persons

app.set("view engine", "ejs");
app.use(personsRoute);
app.use("/assets", express.static(__dirname + "/public"));
let PORT = process.env.PORT || 3000;
//definicion del puerto de escucha
app.listen(PORT, () => {
  console.log("Escuchando en el puerto 3000");
});
