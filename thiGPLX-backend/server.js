// Require packages and set the port
const express = require("express");
const routes = require("./routes");
const port = 5000;
const bodyParser = require("body-parser");
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

routes(app);

/*app.get("/", (request, response) => {
  response.send({
    message: "Node.js and Express REST API",
  });
});*/

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
