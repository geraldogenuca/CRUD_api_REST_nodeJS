// Import of the router class from express
const routes = require('express').Router()

// Import controllers
, costumersControllers = require('../controllers/costumers.controls')

// Creating routes
routes
    // Creating control routes
    .post('/create', costumersControllers.create)
    .get('/index', costumersControllers.index)
    .get('/:id_costumer', costumersControllers.show)
    .patch('/update/:id_costumer', costumersControllers.update)
    .delete('/delete/:id_costumer', costumersControllers.delete)

// Import control routes
module.exports = routes