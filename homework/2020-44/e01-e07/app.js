const express = require("express");

const locations = require("./routes/locations.js");

const app = express();

app.use("/locations", locations);

const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`);
});
