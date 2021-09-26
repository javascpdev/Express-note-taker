const express = require("express");
const fs = require("fs");
const path = require("path");
const routes = require("./routes/notesRoute");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


 app.get("/", (req, res) =>
   res.sendFile(path.join(__dirname, "./routes/notesRoute"))
 );

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
