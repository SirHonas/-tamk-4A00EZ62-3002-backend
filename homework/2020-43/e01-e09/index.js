const connection = require("./database/crudrepository.js");

const main = () => {
  connection.connect();
  connection.findAll((location) => console.log(location));
  connection.save(10, 23, (result) => console.log(result));
  connection.findById(3, (result) => console.log(result));
  connection.deleteById(5, (result) => console.log(result));
  connection.close();
};

main();
