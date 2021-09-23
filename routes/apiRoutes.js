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

    // Assigning new notes to require the body.
    const newNote = req.body;

    // The new notes now has the id of the notes length plus one.
    newNote.id = notes.length + 1;
    // Pushing the notes using the newNote variable above.
    notes.push(newNote);
    

    // writing the file. Or if there is an err then it will throw the error
    fs.writeFile(PATH, JSON.stringify(notes), function (err) {
      if (err) return console.log(err);
    });
    // sending the notes in json.
    res.json(notes);
  });
    // The delete function
  app.delete("/api/notes/:id", function (req, res) {
    // assigning the variable for reading the file in english agin for the note inside this function.
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    // Assigning the const to delete the note instead of the plus one as before now we are using the -1.
    const noteToDelete = req.params.id - 1;

    // Using splice to remove the note.
    notes.splice(noteToDelete, 1);

    // Writing the file and if not throwing the error
    fs.writeFile(PATH, JSON.stringify(notes), function (err) {
      if (err) return console.log(err);
    });

    // Return the notes.
    res.json(notes);
  });
};