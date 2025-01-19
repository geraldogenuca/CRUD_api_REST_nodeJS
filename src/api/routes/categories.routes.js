// Import of the router class from express
const routes = require("express").Router(),
login = require('../middleware/login')
// Import controllers
categoriesControllers = require("../controllers/categories.controls");

// Creating routes
routes
  // Creating control routes
  .post("/create", login.required, categoriesControllers.create)
  .get("/index", categoriesControllers.index)
  .get("/:id_category", categoriesControllers.show)
  .delete("/delete/:id_category", login.required, categoriesControllers.delete);

// Import control routes
module.exports = routes;
