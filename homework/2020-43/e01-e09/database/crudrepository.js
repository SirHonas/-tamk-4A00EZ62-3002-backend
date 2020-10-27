const mysql = require("mysql");
const config = require("./config.js");
var connection = null;

let connectionFunctions = {
  connect: () => {
    connection = mysql.createConnection(config);
    connection.connect();
  },
  close: (callback) => {
    connection.end();
  },
  save: (lat, long, callback) => {
    connection.query(
      "INSERT INTO locations(latitude, longitude) VALUES(?, ?)",
      [lat, long]
    );
  },
  findAll: (callback) => {
    connection.query("select * from locations", (err, locations) => {
      return callback(locations);
    });
  },
  deleteById: (id, callback) => {
    connection.query(
      "delete from locations where id=?",
      [id],
      (err, locations) => {
        return callback(locations);
      }
    );
  },
  findById: (id, callback) => {
    connection.query(
      "select * from locations where id=?",
      [id],
      (err, locations) => {
        return callback(locations);
      }
    );
  },
};

module.exports = connectionFunctions;
