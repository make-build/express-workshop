const mongoose = require("mongoose");

const hackerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  school: { type: String, required: true }
});

const Hacker = new mongoose.model("Hacker", hackerSchema);

module.exports = { Hacker };
