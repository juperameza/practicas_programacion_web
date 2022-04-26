const express = require("express"); //Importamos la dependencia
const app = express(); // Declaramos un app express
const port = process.env.PORT || 3000; //Settteamos el puerto para que escuche el servidor
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log(`Request url: ${req.url}`);
  next();
});
// Primera ruta (esta al nivel de la raiz /), Hello world!
app.get("/", (req, res) => {
  res.render("index");
});

//segun ruta api regresa un objeto json
app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

//Tercera ruta, recibe un parametro
app.get("/person/:id", (req, res) => {
  res.render("person", {
    ID: req.params.id,
    message: req.query.message,
    times: req.query.times,
  });
});

//Tercera ruta, recibe un parametro
app.get("/numbers/:id", (req, res) => {
  res.render("numbers", { ID: req.params.id });
});

app.listen(port); //Levantar el server y ponerlo a la escucha
