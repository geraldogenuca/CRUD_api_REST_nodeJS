require("dotenv").config();

const http = require("http"),
  app = require("./main"),
  port = process.env.SERVER_PORT,
  server = http.createServer(app);

// Creating server for project.
server.listen(port, () => {
  console.log(`Server is running port: ${port}`);
});
