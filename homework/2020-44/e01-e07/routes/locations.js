const express = require("express");
var router = express.Router();

var locations = router.get("/", (req, res) => {
  res.send("Getting all locations");
});
locations.get("/1", (req, res) => {
  res.send("Getting location with id 1");
});
locations.get("/2", (req, res) => {
  res.send("Getting location with id 2");
});
locations.delete("/1", (req, res) => {
  res.send("Delete location with id 1");
});
locations.post("/", (req, res) => {
  res.send("Adding new location");
});

module.exports = locations;
