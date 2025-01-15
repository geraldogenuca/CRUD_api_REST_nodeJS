// Import of the router class from express
const routes = require('express').Router()

// Import controllers
, productsControllers = require('../controllers/products.controls')

// Creating routes
routes
    // Creating control routes
    .post('/create', productsControllers.create)
    .get('/index', productsControllers.index)
    .get('/:id_product', productsControllers.show)
    .patch('/update/:id_product', productsControllers.update)
    .delete('/delete/:id_product', productsControllers.delete)

// Import control routes
module.exports = routes