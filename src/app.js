/*
 *  Taken from https://expressjs.com/en/starter/hello-world.html
 */

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const { Hacker } = require("./models");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

mongoose.connect("mongodb://localhost/workshop", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB!"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/hackers", (req, res) => {
  Hacker.find({}, (err, hackers) => {
    res.send(hackers);
  });
});
app.post("/hackers", (req, res) => {
  const { name, email, school } = req.body;
  const newHacker = Hacker({ name, email, school });
  newHacker.save((err, obj) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(201).send(obj);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
