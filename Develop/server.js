//Boiler plate
const express = require("express");
const path = require("path");
// const { clog } = require("./middleware/clog");
// const api = require("./Develop/routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

//Import custom middleware, "clog" I am not sure if I will need this but we used it on the mini project delete if not needed.
// app.use(clog);

//Middleware for parsing JSON and urlencoded form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("api", api);

app.use(express.static("public"));

//Get route for homepage.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Get route for notes page.
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes"));
});

//Wildcard route for 404.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/404.html"));
});

//Listing on port.
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost${PORT}`);
});
