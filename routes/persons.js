const express = require("express"); //inyectamos una dependencia de express
const router = express.Router(); //declaramos las rutas
const mongoose = require("../node_modules/mongoose"); //Inyectamos moongose
let Person = require("../models/person");

router.get("/persons", (req, res, next) => {
  Person.find((err, persons) => {
    if (err) return next(err);
    res.render("persons.ejs", { persons: persons }); //renderizamos la vista person a la cual le mandamos el objeto persons
  });
});

router.get("/person", (req, res) => {
  res.render("person");
});
router.get("/", (req, res) => {
  res.render("index");
}); //agregando la ruta para cargar el index

router.post("/addPerson", (req, res) => {
  const myPerson = new Person({
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre,
    nss: req.body.nss,
  });
  myPerson.save((err, doc) => {
    if (err) throw err;
    else {
      res.render("index"); //Renderizamos la vista de index despues de enviar el formulario
      console.log("User saved successfully!", doc);
    }
  });
});

module.exports = router;
