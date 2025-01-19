// Import of the router class from express
const routes = require("express").Router(),
  // Import controllers
  uploads = require('../middleware/uploads'),
  //multer = require('multer')
  //uploads = multer({dest: '/public/uploads'}),
  imagesControllers = require("../controllers/images.controls");

// Creating routes
routes
  // Creating control routes
  .post(
    "/create",
    uploads.single('path_image'), 
    imagesControllers.create
  )
  .get("/index", imagesControllers.index)
  .get("/product/:id_product", imagesControllers.showForProduct)
  .get("/:id_image", imagesControllers.show)
  .delete("/delete/:id_image", imagesControllers.delete);

// Import control routes
module.exports = routes;
