// Import DataBase config and query execute
const client = require('../../config/config_db')

// Creating the control class
class OrdersControllers {
    // Creation Control
    async create(req, res) {
        try {                        
            const query = `
                INSERT INTO Orders (
                    id_costumer, id_product, quantity
                    ) 
                VALUES (?, ?, ?);
            `

            const result = await client.execute(
                query, 
                [
                    req.body.id_costumer, req.body.id_product, 
                    req.body.quantity
                ]
            )

            const response = {
                message: 'Order created successfully!',
                createdCategory: {                  
                    id_order: result.insertId,
                    id_costumer: req.body.id_costumer,
                    id_product: req.body.id_product,
                    quantity: req.body.quantity,
                    request: {
                        type: "POST",
                        description: "Inserted order!",
                        url: process.env.URL_ORDS + result.insertId
                    }
                }
            }

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({error: error})
        }
    }

    // Index Control
    async index(req, res) {
        try {
            const result = await client.execute(`SELECT * FROM Orders;`)

            const response = {
                orders_length: result.length,
                orders: result.map(ords => {
                    return {
                        id_order: ords.id_order,
                        id_costumer: ords.id_costumer,
                        request: {
                            type: "GET",
                            description: "List of orders!",
                            url: process.env.URL_ORDS + ords.id_order
                        }
                    }
                })
            }

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    // Details Control
    async show(req, res) {
        try {
            const query_check = `
                SELECT      id_order
                    FROM    Orders
                    WHERE   id_order = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_order])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Order not found!'
                })
            }

            const query = 'SELECT * FROM Orders WHERE id_order = ?;'
    
            const result = await client.execute(query, [req.params.id_order])
    
            const response = {
                costumer: {
                    id_order: result[0].id_order,
                    id_costumer: result[0].id_costumer,
                    request: {
                        type: "GET",
                        description: "Details of costumer!",
                        url: process.env.URL_ORDS + result[0].id_order
                    }
                }
            }
    
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    // Update Control
    async update(req, res) {
        try {
            const query_check = `
                SELECT      id_order
                    FROM    Orders
                    WHERE   id_order = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_order])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Order not found!'
                })
            }

            const query = `
                UPDATE      Orders 
                    SET     id_costumer = ?
                    WHERE   id_order = ?;
            `

            await client.execute(query, [req.body.id_costumer, req.params.id_order])

            const response = {
                message: `Order id: ${req.params.id_order}, updated successfully!`,
                product_updated: {
                    id_order: req.params.id_order,
                    id_costumer: req.body.id_costumer,
                    request: {
                        type: "PATCH",
                        description: "Order costumer!",
                        url: process.env.URL_ORDS + req.params.id_order
                    }
                },
            }

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    // Delete Control
    async delete(req, res) {
        try {
            const query_check = `
                SELECT      id_order
                    FROM    Orders
                    WHERE   id_order = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_order])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Order not found!'
                })
            }

            const query = 'DELETE FROM Orders WHERE id_order = ?;'

            await client.execute(query, [req.params.id_order])

            const response = {
                message: `Order id: ${req.params.id_order}, deleted successfully!`,
                request: {
                    type: "DELETE",
                    description: "Deleted Order!",
                    url_deleted: process.env.URL_ORDS + req.params.id_order
                }
            }

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}

// Import Class Control
module.exports = new OrdersControllers()