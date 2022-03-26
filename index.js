const express = require("express"); //Importamos la dependencia
const app = express(); // Declaramos un app express

const port = process.env.PORT || 3000; //Settteamos el puerto para que escuche el servidor

// Primera ruta (esta al nivel de la raiz /), Hello world!
app.get("/", (req, res) => {
  res.send("<html><head></head><body><h1>Hello world!</h1></body></html>");
});
app.listen(port); //Levantar el server y ponerlo a la escucha

//segun ruta api regresa un objeto json
app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

//Tercera ruta, recibe un parametro
app.get("/person/:id", (req, res) => {
  res.send(
    `<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`
  );
});
