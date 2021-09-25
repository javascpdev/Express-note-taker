// require the file system.
const fs = require("fs");

const PATH = "./db/db.json";

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    // assigning the variable for reading the file in english
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    // Return the data from the const notes above.
    res.json(notes);
  });

  app.post("/api/notes", function (req, res) {
    // assigning the variable for reading the file in english agin for the note inside this function.
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    