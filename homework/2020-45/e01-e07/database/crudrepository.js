const mysql = require("mysql");
const dbConfig = require("./config.js");

const connection = mysql.createConnection(dbConfig);

const connectionFunctions = {
  connect: () => {
    connection.connect((error) => {
      if (error) throw error;
      console.log("Successfully connected to the database.");
    });
  },
  close: (callback) => {
    connection.end();
  },
  save: (location, callback) => {
    var query = connection.query(
      "INSERT INTO locations(latitude, longitude) VALUES(?, ?)",
      [location.latitude, location.longitude],
      (err) => {
        if (err) {
          throw err;
        } else callback();
      }
    );
  },
  findAll: (callback) => {
    connection.query("SELECT * FROM locations", (err, locations) => {
      if (err) {
        throw err;
      }
      callback(locations);
    });
  },
  deleteById: (id, callback) => {
    connection.query(
      "DELETE FROM locations WHERE id=?",
      [id],
      (err, locations) => {
        return callback(locations);
      }
    );
  },
  findById: (id, callback) => {
    connection.query(
      "SELECT * FROM locations WHERE id=?",
      [id],
      (err, locations) => {
        return callback(locations);
      }
    );
  },
};

module.exports = connectionFunctions;
