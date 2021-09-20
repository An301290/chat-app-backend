const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => (`Server is running on port {$PORT}`)); 