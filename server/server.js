const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const { createServer } = require("http");
const server = createServer(app);
const socketInit = require("./services/socketioInit");
require("dotenv").config();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/api"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use(require("./middlewares/errorHandler"));

socketInit(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
