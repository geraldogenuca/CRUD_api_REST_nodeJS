// Import of the router class from express.
const routes = require("express").Router(),
  login = require("../middleware/login"),
  // Import controllers.
  costumersControllers = require("../controllers/costumers.controls");

// Creating routes.
routes
  // Creating control routes.
  .post("/create", login.optional, costumersControllers.create)
  .post("/login", login.optional, costumersControllers.login)
  .get("/index", login.optional, costumersControllers.index)
  .get("/:id_costumer", login.optional, costumersControllers.show)
  .patch("/update/:id_costumer", login.required, costumersControllers.update)
  .delete("/delete/:id_costumer", login.required, costumersControllers.delete);

// Import control routes.
module.exports = routes;
