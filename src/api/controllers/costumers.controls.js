// Import DataBase config and query execute
const client = require("../../config/config_db"),
bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken')

// Creating the control class
class CostumersControllers {
  // Creation Control
  async create(req, res) {
    try {
      const query_check = `
                SELECT      email_costumer
                    FROM    Costumers
                    WHERE   email_costumer = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.body.email_costumer,
      ]);

      if (result_check.length > 0) {
        return res.status(404).json({
          message: "Email already exists!",
        });
      }

      const query = `
                INSERT INTO 
                        Costumers (
                        name_costumer, email_costumer, password_costumer
                        ) 
                    VALUES (?, ?, ?);
            `;

      const password_hash = bcrypt.hashSync(req.body.password_costumer, 10)

      const result = await client.execute(query, [
        req.body.name_costumer,
        req.body.email_costumer,
        password_hash,
      ]);

      const response = {
        message: "Costumer created successfully!",
        createdCategory: {
          id_costumer: result.insertId,
          name_costumer: req.body.name_costumer,
          email_costumer: req.body.email_costumer,
          password_costumer: password_hash,
          request: {
            type: "POST",
            description: "Inserted costumer!",
            url: process.env.URL_COST + result.insertId,
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  // Creation Login Control
  async login(req, res) {
    try {
      const query_check = `
                SELECT      email_costumer
                    FROM    Costumers
                    WHERE   email_costumer = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.body.email_costumer,
      ]);

      if (result_check.length < 1) {
        return res.status(404).json({
          message: "Login failed! Check the fields, or contact support!",
        });
      }

      const query = 'SELECT * FROM Costumers WHERE email_costumer = ?;'

      const result = await client.execute(query, [req.body.email_costumer])

      if(await bcrypt.compareSync(
        req.body.password_costumer,
        result[0].password_costumer
      )) {
        const token = jwt.sign({
          id_costumer: result[0].id_costumer,
          email_costumer: result[0].email_costumer
        }, 
        process.env.JWT_KEY,
        {
          expiresIn: "2h"
        })

        return res.status(200).json({
          message: 'Authenticated successfully!',
          token: token
        })
      }

      return res.status(200).json({message: "Authentication Failed!"});
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  // Index Control
  async index(req, res) {
    try {
      const result = await client.execute(`SELECT * FROM Costumers;`);

      const response = {
        costumers_length: result.length,
        costumer: result.map((cost) => {
          return {
            id_costumer: cost.id_costumer,
            name_costumer: cost.name_costumer,
            email_costumer: cost.email_costumer,
            password_costumer: cost.password_costumer,
            request: {
              type: "GET",
              description: "List of costumers!",
              url: process.env.URL_COST + cost.id_costumer,
            },
          };
        }),
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  // Details Control
  async show(req, res) {
    try {
      const query_check = `
                SELECT      id_costumer
                    FROM    Costumers
                    WHERE   id_costumer = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.params.id_costumer,
      ]);

      if (result_check.length == 0) {
        return res.status(404).json({
          message: "Product not found!",
        });
      }

      const query = "SELECT * FROM Costumers WHERE id_costumer = ?;";

      const result = await client.execute(query, [req.params.id_costumer]);

      const response = {
        costumer: {
          id_costumer: result[0].id_costumer,
          name_costumer: result[0].name_costumer,
          email_costumer: result[0].email_costumer,
          password_costumer: result[0].password_costumer,
          request: {
            type: "GET",
            description: "Details of costumer!",
            url: process.env.URL_COST + result[0].id_costumer,
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  // Update Control
  async update(req, res) {
    try {
      const query_check = `
                SELECT      id_costumer
                    FROM    Costumers
                    WHERE   id_costumer = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.params.id_costumer,
      ]);

      if (result_check.length == 0) {
        return res.status(404).json({
          message: "Costumer not found!",
        });
      }

      const query = `
                UPDATE      Costumers 
                    SET     name_costumer = ?, email_costumer = ?, 
                            password_costumer = ?
                    WHERE   id_costumer = ?;
            `;

      await client.execute(query, [
        req.body.name_costumer,
        req.body.email_costumer,
        req.body.password_costumer,
        req.params.id_costumer,
      ]);

      const response = {
        message: `Costumer id: ${req.params.id_costumer}, updated successfully!`,
        product_updated: {
          id_costumer: req.params.id_costumer,
          name_costumer: req.body.name_costumer,
          email_costumer: req.body.email_costumer,
          password_costumer: req.body.password_costumer,
        },
        request: {
          type: "PATCH",
          description: "Updated costumer!",
          url: process.env.URL_COST + req.params.id_costumer,
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  // Delete Control
  async delete(req, res) {
    try {
      const query_check = `
                SELECT      id_costumer
                    FROM    Costumers
                    WHERE   id_costumer = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.params.id_costumer,
      ]);

      if (result_check.length == 0) {
        return res.status(404).json({
          message: "Costumer not found!",
        });
      }

      const query = "DELETE FROM Costumers WHERE id_costumer = ?;";

      await client.execute(query, [req.params.id_costumer]);

      const response = {
        message: `Costumer id: ${req.params.id_costumer}, deleted successfully!`,
        request: {
          type: "DELETE",
          description: "Deleted Costumer!",
          url_deleted: process.env.URL_COST + req.params.id_costumer,
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

// Import Class Control
module.exports = new CostumersControllers();
