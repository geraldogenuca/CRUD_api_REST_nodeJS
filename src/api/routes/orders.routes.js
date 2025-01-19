// Import of the router class from express
const routes = require("express").Router(),
  // Import controllers
  ordersControllers = require("../controllers/orders.controls");

// Creating routes
routes
  // Creating control routes
  .post("/create", ordersControllers.create)
  .get("/index", ordersControllers.index)
  .get("/:id_order", ordersControllers.show)
  .patch("/update/:id_order", ordersControllers.update)
  .delete("/delete/:id_order", ordersControllers.delete);

// Import control routes
module.exports = routes;
