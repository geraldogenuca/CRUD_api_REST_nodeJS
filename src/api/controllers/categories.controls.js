// Import DataBase config and query execute
const client = require('../../config/config_db')

// Creating the control class
class CategoriesControllers {
    // Creation Control
    async create(req, res) {
        try {
            const query_check = `
                SELECT      name_category
                    FROM    Categories
                    WHERE   name_category = ?;
            `
            const result_check = await client.execute(query_check, [req.body.name_category])

            if (result_check.length > 0) {
                return res.status(404).json({
                    message: 'Category name already exists!'
                })
            }

            const query = 'INSERT INTO Categories (name_category) VALUES (?);'

            const result = await client.execute(query, [req.body.name_category])

            const response = {
                message: 'Category created successfully!',
                createdCategory: {
                    id_category: result.insertId,
                    name_category: req.body.name_category,
                    request: {
                        type: "POST",
                        description: "Inserted category!",
                        url: process.env.URL_CATG + result.insertId
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
            const result = await client.execute(`SELECT * FROM Categories;`)

            const response = {
                categories_length: result.length,
                categories: result.map(cat => {
                    return {
                        id_category: cat.id_category,
                        name_category: cat.name_category,
                        request: {
                            type: "GET",
                            description: "List of categories!",
                            url: process.env.URL_CATG + cat.id_category
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
                            SELECT      id_category
                                FROM    Categories
                                WHERE   id_category = ?;
                        `
                        const result_check = await client.execute(query_check, [req.params.id_category])
            
                        if (result_check.length == 0) {
                            return res.status(404).json({
                                message: 'Category not found!'
                            })
                        }

            const query = 'SELECT * FROM Categories WHERE id_category = ?;'
    
            const result = await client.execute(query, [req.params.id_category])
    
            const response = {
                category: {
                    id_category: result[0].id_category,
                    name_category: result[0].name_category,
                    request: {
                        type: "GET",
                        description: "Details of category!",
                        url: process.env.URL_CATG + result[0].id_category
                    }
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
                SELECT      id_category
                    FROM    Categories
                    WHERE   id_category = ?;
            `
            const result_check = await client.execute(query_check, [req.params.id_category])

            if (result_check.length == 0) {
                return res.status(404).json({
                    message: 'Category not found!'
                })
            }

            const query = 'DELETE FROM Categories WHERE id_category = ?;'

            await client.execute(query, [req.params.id_category])

            const response = {
                message: `Category id: ${req.params.id_category}, deleted successfully!`,
                request: {
                    type: "DELETE",
                    description: "Deleted Category!",
                    url_deleted: process.env.URL_CATG + req.params.id_category
                }
            }

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}

// Import Class Control
module.exports = new CategoriesControllers()