const routes = require('express').Router()

// Import controllers
, categoriesControllers = require('../controllers/categories.controls')

// Creater routes
routes
    .post('/create', categoriesControllers.create)
    .get('/index', categoriesControllers.index)
    .get('/:id_category', categoriesControllers.show)
    .delete('/delete/:id_category', categoriesControllers.delete)

    .get('/catroute', (req, res) => {res.json('Categories routes!')})

module.exports = routes