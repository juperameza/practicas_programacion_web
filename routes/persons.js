const express = require("express"); //inyectamos una dependencia de express
const router = express.Router(); //declaramos las rutas
const mongoose = require("../node_modules/mongoose"); //Inyectamos moongose
let Person = require("../models/person");

router.get("/persons", (req, res, next) => {
  Person.find((err, persons) => {
    if (err) return next(err);
    res.json(persons);
  });
}); //definimos la ruta de persona que devuelve un json si no hay error

router.get("/person", (req, res) => {
  res.render("person");
});

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
      res.render("index.ejs");
      console.log("User saved successfully!", doc);
    }
  });
});

module.exports = router;
