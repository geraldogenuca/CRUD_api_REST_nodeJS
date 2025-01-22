// Import of the router class from express.
const routes = require("express").Router(),
  login = require("../middleware/login"),
  // Import controllers.
  ordersControllers = require("../controllers/orders.controls");

// Creating routes.
routes
  // Creating control routes.
  .post("/create", login.required, ordersControllers.create)
  .get("/index", ordersControllers.index)
  .get("/:id_order", ordersControllers.show)
  .patch("/update/:id_order", login.required, ordersControllers.update)
  .delete("/delete/:id_order", login.required, ordersControllers.delete);

// Import control routes.
module.exports = routes;
