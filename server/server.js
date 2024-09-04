const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/api"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use(require("./middlewares/errorHandler"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
