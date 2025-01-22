// Import variables system.
require("dotenv").config();

// Creation of server vestments.
const http = require("http"),
  app = require("./main"),
  port = process.env.SERVER_PORT || 5001,
  server = http.createServer(app);

// Creating server for project.
server.listen(port, () => {
  console.log(`Server is running port: ${port}`);
});
