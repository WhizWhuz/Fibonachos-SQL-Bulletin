const express = require("express");
const cors = require("cors");
const app = express();

const channelRoutes = require("./routes/channelRoutes");
app.use(cors());
app.use(express.json());

//Routes
app.use("/channels", channelRoutes);

module.exports = app;
