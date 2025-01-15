// Import depedencies and libs.
const express = require('express')
, app = express()
, cors = require('cors')
, morgan = require('morgan')

// Import routes.
, categoriesRoutes = require('./api/routes/categories.routes')
, productsRoutes = require('./api/routes/products.routes')
, costumersRoutes = require('./api/routes/costumers.routes')
, ordersRoutes = require('./api/routes/orders.routes')

// Running dependencies and libs.
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Running routes, creating end-points.
app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)
app.use('/costumers', costumersRoutes)
app.use('/orders', ordersRoutes)

module.exports = app