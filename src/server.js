const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const api = express();

api.use(routes);
api.use(cors());

api.listen("3056");