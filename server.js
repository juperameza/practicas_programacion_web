const mongoose = require("mongoose"); //inyectamos una instncia de moongose
const express = require("express"); //inyectamos una dependencia de express
const personsRoutes = require("./routes/persons"); //inyectamos una dependeica del routr persons
//generar app de express  settear un valor de mongoose
mongoose.Promise = global.Promise;
const app = express();
//Configurar view engine, agregar el router y el urlencoded para parsear el body en las peticiones tipo POST
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(personsRoutes);
//conectarnos a nuestra base de datos:

mongoose.connect(
  "mongodb+srv://juperameza:2703@cluster0.6x5pf.mongodb.net/TEST?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error :"));
db.once("open", () => {
  console.log("Connected succesfully");
});
//levantamos nuestro server
app.listen(3000);
