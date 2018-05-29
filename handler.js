
const serverless = require("serverless-http");
const hbs = require("hbs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.status(200).render("index");
});

module.exports.gallery = serverless(app);
