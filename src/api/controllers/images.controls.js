// Import DataBase config and query execute.
const client = require("../../config/config_db");

// Creating the control class.
class ImagesControllers {
  // Creation Control.
  async create(req, res) {
    try {
      // Performing the action.
      const query = `
                INSERT INTO 
                        Images (id_product, path_image) 
                    VALUES (?, ?);
            `;

      const result = await client.execute(query, [
        req.body.id_product,
        req.file.path,
      ]);

      const response = {
        message: "Image created successfully!",
        createdCategory: {
          id_image: result.insertId,
          id_product: req.body.id_product,
          path_image: req.file.path,
          request: {
            type: "POST",
            description: "Inserted image!",
            url: process.env.URL_IMGS + result.insertId,
            path_image:
              process.env.URL_SERVER +
              req.file.path.replaceAll("\\", "/").replaceAll(" ", "_"),
          },
        },
      };

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  // Index Control.
  async index(req, res) {
    try {
      // Performing the action.
      const result = await client.execute(`SELECT * FROM Images;`);

      const response = {
        images_length: result.length,
        images: result.map((imgs) => {
          return {
            id_image: imgs.id_image,
            id_product: imgs.id_product,
            path_image: imgs.path_image,
            request: {
              type: "GET",
              description: "List of Images!",
              url_path: process.env.URL_IMGS + imgs.id_image,
              url_image:
                process.env.URL_SERVER +
                imgs.path_image.replaceAll("\\", "/").replaceAll(" ", "_"),
            },
          };
        }),
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  // Details for ProductControl.
  async showForProduct(req, res) {
    try {
      // Checking data integrity.
      const query_check = `
                SELECT      id_product
                    FROM   Images
                    WHERE   id_product = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.params.id_product,
      ]);

      if (result_check.length == 0) {
        return res.status(404).json({
          message: "Image Product not found!",
        });
      }

      // Performing the action.
      const query = "SELECT * FROM Images WHERE id_product = ?;";

      const result = await client.execute(query, [req.params.id_product]);

      const response = {
        images_product_length: result.length,
        images_product: result.map((imgs_prod) => {
          return {
            id_image: imgs_prod.id_image,
            id_product: imgs_prod.id_product,
            path_image: imgs_prod.path_image,
            request: {
              type: "GET",
              description: "List of Images!",
              url_path: process.env.URL_IMGS + imgs_prod.id_image,
              url_image:
                process.env.URL_SERVER +
                imgs_prod.path_image.replaceAll("\\", "/").replaceAll(" ", "_"),
            },
          };
        }),
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  // Details Controls.
  async show(req, res) {
    try {
      // Checking data integrity
      const query_check = `
                SELECT      id_image
                    FROM   Images
                    WHERE   id_image = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.params.id_image,
      ]);

      if (result_check.length == 0) {
        return res.status(404).json({
          message: "Image not found!",
        });
      }

      // Performing the action.
      const query = "SELECT * FROM Images WHERE id_image = ?;";

      const result = await client.execute(query, [req.params.id_image]);

      const response = {
        image: {
          id_image: result[0].id_image,
          id_product: result[0].id_product,
          path_image: result[0].path_image,
          request: {
            type: "GET",
            description: "Details of image!",
            url: process.env.URL_IMGS + result[0].id_image,
            path_image:
              process.env.URL_SERVER +
              result[0].path_image.replaceAll("\\", "/").replaceAll(" ", "_"),
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  // Delete Control.
  async delete(req, res) {
    try {
      // Checking data integrity.
      const query_check = `
                SELECT      id_image
                    FROM    Images
                    WHERE   id_image = ?;
            `;
      const result_check = await client.execute(query_check, [
        req.params.id_image,
      ]);

      if (result_check.length == 0) {
        return res.status(404).json({
          message: "Image Product not found!",
        });
      }

      // Performing the action.
      const query = "DELETE FROM Images WHERE id_image = ?;";

      await client.execute(query, [req.params.id_image]);

      const response = {
        message: `Image id: ${req.params.id_image}, deleted successfully!`,
        request: {
          type: "DELETE",
          description: "Deleted Image!",
          url_deleted: process.env.URL_IMGS + req.params.id_image,
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

// Import Class Control.
module.exports = new ImagesControllers();
