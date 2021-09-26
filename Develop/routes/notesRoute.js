const fs = require("fs");
const PATH = "./db/db.json";

module.exports = (app) => {
  app.get("/app/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    res.json(notes);
  });

  app.post("/app/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));
    const newNote = req.body;
    newNote.id = notes.length + 1;
    notes.push(newNote);
    fs.writeFile(PATH, JSON.stringify(notes), (err) => {
      if (err) return console.log(err);
    });
    res.json(notes);
  });

  app.delete("/app/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    const noteToDelete = req.params.id - 1;

    notes.splice(noteToDelete, 1);

    fs.writeFile(PATH, JSON.stringify(notes), (err) => {
      if (err) return console.log(err);
    });

    res.json(notes);
  });
};
