const mongoose = require("mongoose");
const express = require("express");
const personsRoutes = require("./routes/persons");
mongoose.Promise = global.Promise;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(personsRoutes);
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
app.listen(3000);
