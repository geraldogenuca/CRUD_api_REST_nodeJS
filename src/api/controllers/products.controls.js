// Import DataBase config and query execute
const client = require('../../config/config_db')

// Creating the control class
class ProductsControllers {
    // Creation Control
    async create(req, res) {
        try {
            const query_check = `
                SELECT      name_product
                    FROM    Products
                    WHERE   name_product = ?;
            `
            const result_check = await client.execute(query_check, [req.body.name_product])

            if (result_check.length > 0) {
                return res.status(404).json({
                    message: 'Product name already exists!'
                })
            }                        

            const query = `
                INSERT INTO 
                        Products (
                        id_category, name_product, 
                        price_product, description
                        ) 
                    VALUES (?, ?, ?, ?);
            `

            const result = await client.execute(
                query, 
                [
                    req.body.id_category, req.body.name_product,
                    req.body.price_product, req.body.description 
                ]
            )

            const response = {
                message: 'Product created successfully!',
                createdCategory: {
                    id_product: result.insertId,
                    id_category: req.body.id_category,
                    name_product: req.body.name_product,
                    price_product: req.body.price_product,
                    description: req.body.description,
                    request: {
                        type: "POST",
                        description: "Inserted product!",
                        url: process.env.URL_PROD + result.insertId
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
            const result = await client.execute(`SELECT * FROM Products;`)

            const response = {
                products_length: result.length,
                products: result.map(prod => {
                    return {
                        id_product: prod.id_product,
                        id_category: prod.id_category,
                        name_product: prod.name_product,
                        price_product: prod.price_product,
                        description: prod.description,
                        request: {
                            type: "GET",
                            description: "List of products!",
                            url: process.env.URL_PROD + prod.id_product
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
                SELECT      id_product
                    FROM    Products
                    WHERE   id_product = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_product])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Product not found!'
                })
            }

            const query = 'SELECT * FROM Products WHERE id_product = ?;'
    
            const result = await client.execute(query, [req.params.id_product])
    
            const response = {
                category: {
                    id_product: result[0].id_product,
                    id_category: result[0].id_category,
                    name_product: result[0].name_product,
                    price_product: result[0].price_product,
                    description: result[0].description,
                    request: {
                        type: "GET",
                        description: "Details of product!",
                        url: process.env.URL_PROD + result[0].id_product
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
                SELECT      id_product
                    FROM    Products
                    WHERE   id_product = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_product])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Product not found!'
                })
            }

            const query = `
                UPDATE      Products 
                    SET     id_category = ?, name_product = ?,
                            price_product = ?, description = ?
                    WHERE   id_product = ?;
            `

            await client.execute(query, [
                req.body.id_category, req.body.name_product, 
                req.body.price_product, req.body.description, 
                req.params.id_product
            ])

            const response = {
                message: `Product id: ${req.params.id_product}, updated successfully!`,
                product_updated: {
                    id_product: req.body.id_product,
                    id_category: req.body.id_category,
                    name_product: req.body.name_product,
                    price_product: req.body.price_product,
                    description: req.body.description,
                },
                request: {
                    type: "PATCH",
                    description: "Updated product!",
                    url: process.env.URL_PROD + req.params.id_product
                }
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
                SELECT      id_product
                    FROM    Products
                    WHERE   id_product = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_product])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Product not found!'
                })
            }

            const query = 'DELETE FROM Products WHERE id_product = ?;'

            await client.execute(query, [req.params.id_product])

            const response = {
                message: `Product id: ${req.params.id_product}, deleted successfully!`,
                request: {
                    type: "DELETE",
                    description: "Deleted Product!",
                    url_deleted: process.env.URL_PROD + req.params.id_product
                }
            }

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}

// Import Class Control
module.exports = new ProductsControllers()