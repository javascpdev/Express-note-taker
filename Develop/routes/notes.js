const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

//Get route for retrieving all the notes.
notes.get("/", (req, res) => {
  readFromFile("./db/notes.json").then((data) => res.json(JSON.parse(data)));
});

// Post for new note.
notes.post("/", (req, res) => {
  console.log(req.body);

  const { notes } = req.body;

  if (req.body) {
    const newNote = {
      noteTitle,
      noteText,
      note_id: uuidv4(),
    };

    readAndAppend("./db/notes.json");
    res.json(`New note added successfully`);
  } else {
    res.error(` Error creating new note`);
  }
});

module.exports = notes;
