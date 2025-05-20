const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const channelRoutes = require("./routes/channelRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use(cors());
app.use(express.json());

//Routes
app.use("/channels", channelRoutes);
app.use("/users", userRoutes);
app.use("/", messageRoutes);

module.exports = app;
