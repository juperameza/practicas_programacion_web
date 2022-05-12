const express = require("express"); //Importamos la dependencia
const app = express(); // Declaramos un app express
const port = process.env.PORT || 3000; //Settteamos el puerto para que escuche el servidor
app.use("/assets", express.static(__dirname + "/public")); //contenido estatico

app.use(express.urlencoded({ extended: false })); //Declarando el boy parser de express

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
    /* Recibiendo el mensaje mediante el query string */
    message: req.query.message,
    times: req.query.times,
  });
});

//Tercera ruta, recibe un parametro
app.get("/numbers/:id", (req, res) => {
  res.render("numbers", { ID: req.params.id });
});

//Renderizar el formulario mediante la ruta student
app.get("/student", (req, res) => {
  res.render("index");
});

//Ruta para post de el formulario de nombre y apellido

app.post("/student", (req, res) => {
  res.send(`First name is: ${req.body.fname}, Last name is ${req.body.lsname}`);
});
//enviamos como parametro extra, el callback para que se ejecuta
//antes del route handler
app.post("/personjson", express.json({ type: "*/*" }), (req, res) => {
  console.log(`El objeto contiene `, req.body);
  console.log(`Nombre: ${req.body.firstname}`);
  console.log(`Apellido ${req.body.lastname}`);
});
app.listen(port); //Levantar el server y ponerlo a la escucha
