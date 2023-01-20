const express = require("express");
const HelloController = require("./controllers/HelloController");
const MotivationController = require("./controllers/MotivationController");

const routes = express.Router();
const helloController = new HelloController();
const motivationController = new MotivationController();

routes.get("/", helloController.index);
routes.get("/inplen", motivationController.index);

module.exports = routes;