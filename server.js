const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const middlewares = jsonServer.defaults();

// Middleware setup
server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

// Define the PORT and bind to 0.0.0.0
const PORT = process.env.PORT || 10000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
