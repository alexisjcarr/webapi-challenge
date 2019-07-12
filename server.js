const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const projectRouter = require("./routers/projectRouter");

const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("<h1>Welcome to the Projects API!</h1>");
});

// ROUTERS GO HERE
server.use("/projects", projectRouter);

module.exports = server;
