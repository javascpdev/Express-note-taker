const app = require("express").Router();
let dataBase = require("../db/db.json");
const path = require("path");

app.get("/notes", (req, res) => {
  res.json(dataBase);
});

app.post("/notes", (req, res) => {
  let note = req.body;
  dataBase.push(note);

  fs.writeFile(
    __dirname + "/../db/db.json",
    JSON.stringify(dataBase),
    (error) => {
      if (error) throw error;
    }
  );
  res.end();
});

module.exports = app;
