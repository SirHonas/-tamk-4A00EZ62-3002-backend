const express = require("express");
const connection = require("./database/crudrepository.js");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  connection.findAll((result) => res.send(result));
});
app.get("/locations/:myVariable([0-9]+)", (req, res) => {
  let id = req.params.myVariable;
  connection.findById(id, (location) => res.send(location));
});
app.delete("/locations/:myVariable([0-9]+)", (req, res) => {
  let id = req.params.myVariable;
  connection.deleteById(id, (location) => res.send(location));
});
app.post("/locations", (req, res) => {
  let location = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  connection.save(location, (location) => res.send(location));
});
const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`);
});
