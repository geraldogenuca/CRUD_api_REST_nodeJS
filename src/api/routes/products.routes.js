// Import of the router class from express.
const routes = require("express").Router(),
  login = require("../middleware/login"),
  // Import controllers.
  productsControllers = require("../controllers/products.controls");

// Creating routes.
routes
  // Creating control routes.
  .post("/create", login.required, productsControllers.create)
  .get("/index", login.optional, productsControllers.index)
  .get("/:id_product", login.optional, productsControllers.show)
  .patch("/update/:id_product", login.required, productsControllers.update)
  .delete("/delete/:id_product", login.required, productsControllers.delete);

// Import control routes.
module.exports = routes;
