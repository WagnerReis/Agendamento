const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const router = express.Router();

// app.use(app.router);
// router.initialize(app);
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/agendamento",{useNewUrlParser: true, useUnifiedTopology: true});




app.get("/", (req, res) => {
  res.send("Oi!");
});

app.get("/cadastro", (req, res) => {
  res.render("create");
});

app.listen(8080, () => {});