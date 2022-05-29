const express = require("express"); //inyectamos una dependencia de express
const router = express.Router(); //declaramos las rutas
const mongoose = require("../node_modules/mongoose"); //Inyectamos moongose
let Person = require("../models/person");
const { route } = require("express/lib/application");

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

//Delete person
router.get("/deletePerson/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.redirect("/persons");
  });
});

//Update person
router.get("/findById/:id", (req, res, next) => {
  Person.findById(req.params.id, (err, person) => {
    if (err) return next(err);
    res.render("personUpdate", { person });
  });
});
//Put method to update the person
router.post("/updatePerson", (req, res, next) => {
  Person.findByIdAndUpdate(
    req.body.objId,
    {
      nombre: req.body.nombre,
      edad: req.body.edad,
      tipoSangre: req.body.tipoSangre,
      nss: req.body.nss,
    },
    (err, post) => {
      if (err) return next(err);
      res.redirect("/persons");
    }
  );
});

//post method to add new person
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
