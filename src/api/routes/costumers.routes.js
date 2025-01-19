// Import of the router class from express
const routes = require("express").Router(),
login = require('../middleware/login'),

// Import controllers
costumersControllers = require("../controllers/costumers.controls");

// Creating routes
routes
  // Creating control routes
  .post("/create", costumersControllers.create)
  .post("/login", costumersControllers.login)
  .get("/index", costumersControllers.index)
  .get("/:id_costumer", costumersControllers.show)
  .patch("/update/:id_costumer", login.required, costumersControllers.update)
  .delete("/delete/:id_costumer", login.required, costumersControllers.delete);

// Import control routes
module.exports = routes;
