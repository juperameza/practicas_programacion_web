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
module.exports = router;
