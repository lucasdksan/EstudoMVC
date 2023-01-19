const express = require("express");
const routes = require("./routes");

const api = express();

api.use(routes);

api.listen("3056");