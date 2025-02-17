const express = require("express");
const route = express.Router();

route.post("/login", login);
route.post("/signup", signup);


module.exports = route;