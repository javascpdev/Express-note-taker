const app = require("express").Router();
let dataBase = require("../db/db.json");
const fs = require("fs");

app.get("/api/notes", (req, res) => {
  res.json(dataBase);
});

app.post("/api/notes", (req, res) => {
  let note = req.body;
  console.log(note);
  dataBase.push(note);

  fs.writeFile(
    __dirname + "../db/db.json",
    JSON.stringify(dataBase),
    (error) => {
      if (error) throw error;
    }
  );
  res.end();
});

module.exports = app;
