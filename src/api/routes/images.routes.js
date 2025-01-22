// Import of the router class from express.
const routes = require("express").Router(),
  login = require("../middleware/login"),
  // Import controllers
  uploads = require("../middleware/uploads"),
  imagesControllers = require("../controllers/images.controls");

// Creating routes.
routes
  // Creating control routes.
  .post(
    "/create",
    login.required,
    uploads.single("path_image"),
    imagesControllers.create
  )
  .get("/index", login.optional, imagesControllers.index)
  .get("/:id_image", login.optional, imagesControllers.show)
  .get("/product/:id_product", login.optional, imagesControllers.showForProduct)
  .delete("/delete/:id_image", login.required, imagesControllers.delete);

// Import control routes.
module.exports = routes;
