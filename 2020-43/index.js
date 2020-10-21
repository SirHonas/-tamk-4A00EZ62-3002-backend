const mysql = require("mysql");
const config = require("./config.js");
const connection = mysql.createConnection(config);

connection.connect();

connection.query(
  "INSERT INTO locations(latitude, longitude) VALUES(25, 32)",
  (err, locations) => {
    if (err) {
      throw err;
    }
  }
);

connection.query("select * from locations", (err, locations) => {
  if (err) {
    throw err;
  }
  locations.forEach((location) =>
    console.log(`${location.id} ${location.latitude} ${location.longitude}`)
  );
});

// will wait if previously enqueued queries
connection.end();
