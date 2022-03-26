const express = require("express"); //Importamos la dependencia
const app = express(); // Declaramos un app express

const port = process.env.PORT || 3000; //Settteamos el puerto para que escuche el servidor
app.use("/assets", express.static(__dirname + "/public"));
app.use("/", (req, res, next) => {
  console.log(`Request url: ${req.url}`);
  next();
});
// Primera ruta (esta al nivel de la raiz /), Hello world!
app.get("/", (req, res) => {
  res.send(`<html>
  <head>
    <link href=assets/style.css type=text/css rel=stylesheet>
  </head>
  <body>
    <h1> Hello World! </h1>
  </body>
  </html>`);
});

//segun ruta api regresa un objeto json
app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

//Tercera ruta, recibe un parametro
app.get("/person/:id", (req, res) => {
  res.send(
    `<html>
      <head>
        <link href=assets/style.css type=text/css rel=stylesheet>
      </head>
      <body>
        <h1>Person: ${req.params.id}</h1>
      </body>
      </html>`
  );
});

app.listen(port); //Levantar el server y ponerlo a la escucha
