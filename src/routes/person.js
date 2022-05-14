let express = require("express"); //inyeccion de la dependencia express
let router = express.Router();
//INstanciamos el "router" al que asociaremos todas las vistas
router.get("/person", (req, res) => {
  res.send("Haz solcitado un listado de personas");
});
module.exports = router;
