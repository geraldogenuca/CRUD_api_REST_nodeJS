const client = require('../../config/config_db')

class CategoriesControllers {
    async create(req, res) {
        try {
            const query = 'INSERT INTO Categories (name_category) VALUES (?);'

            const result = await client.execute(query, [req.body.name_category])

            const response = {
                message: 'Category created successfully!',
                createdCategory: {
                    id_category: result.insertId,
                    name_category: req.body.name_category,
                    request: {
                        type: "POST",
                        description: "Inserted categories!",
                        url: process.env.URL_CATG + result.insertId
                    }
                }
            }

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({error: error})
        }
    }

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
                            url: process.env.URL_CATS + cat.id_category
                        }
                    }
                })
            }

            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    async show(req, res) {
        try {
            const query = 'SELECT * FROM Categories WHERE id_category = ?;'
    
            const result = await client.execute(query, [req.params.id_category])
    
            const response = {
                category: {
                    id_category: result[0].id_category,
                    name_category: result[0].name_category,
                    request: {
                        type: "GET",
                        description: "Details of categories!",
                        url: process.env.URL_CATS + result[0].id_category
                    }
                }
            }
    
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    async delete(req, res) {
        try {
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

module.exports = new CategoriesControllers()