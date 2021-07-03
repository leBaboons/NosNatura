const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
var path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/map", function (req, res) {
  res.render("harta");
});

app.listen(3000,'192.168.3.88',function(){
  console.log('Server running at http://127.0.1.1:8000/')
})
