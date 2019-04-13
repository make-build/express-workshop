/*
 *  Taken from https://expressjs.com/en/starter/hello-world.html
 */

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

const hackers = [
  {
    name: "Andrew Sosa",
    email: "team@makebuild.com",
    school: "FSU"
  },
  {
    name: "Ann Hacker",
    email: "ann@hacker.org",
    school: "FSU"
  }
];

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/hackers", (req, res) => res.send(hackers));
app.post("/hackers", (req, res) => {
  const { name, email, school } = req.body;
  const newHacker = { name, email, school };
  hackers.push(newHacker);
  res.status(201).send(newHacker);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
