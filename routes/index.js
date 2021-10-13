// const app = require('express').Router();
// let dataBase = require('../db/db.json');
// const fs = require ('fs');
// const uniqid = require('uniqid');


// app.get('/api/notes', (req, res) => {
//    res.json(dataBase)
//   });


//   app.post('/api/notes', (req, res) => {
//       let note = req.body
//       note.id = uniqid ()
//       console.log(note);
// dataBase.push(note)


// fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(dataBase), error => {
//     if(error) throw error
// })
//     res.end()
//   })

// // attempting delete
// app.delete('/api/notes/:id', (req, res) => {
//     const id = req.params.id;
//     let deleteNote = dataBase.filter((note) => {
//         return note.id != id 
//     }) 
//      dataBase = deleteNote 
//      fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(dataBase), error => {
//         if(error) throw error
//     })
//         res.end()
//    })

  
//   module.exports = app

//   ---------===========---------not my code

  const express = require('express');
const notes = require('./notes');

const app = express();

app.use('/notes', notes);

module.exports = app;