var Validator = require("jsonschema").Validator;
const { validate } = require("jsonschema");
const mysql = require("mysql");
const config = require("./config.js");
var connection = null;
var validator = new Validator();
validator = {
  type: "array",
  properties: {
    latitude: { type: "number", min: -90, max: 90 },
    longitude: { type: "number", min: -180, max: 180 },
  },
};

const connectionFunctions = {
  connect: () => {
    connection = mysql.createConnection(config);
    connection.connect();
  },
  close: (callback) => {
    connection.end();
  },
  save: (location, callback) => {
    validate(location, validator);
    connection.query(
      "INSERT INTO locations(latitude, longitude) VALUES(?)",
      [location],
      (err, locations) => {}
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
