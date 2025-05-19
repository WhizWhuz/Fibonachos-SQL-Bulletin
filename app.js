const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/posts");

const app = express();

app.use(cors());
app.use(express.json());

//Routes

module.exports = app;
