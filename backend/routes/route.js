const express = require("express");
const { validateLogin } = require("../validate/auth.validate");
const route = express.Router();
const {login} = require("../controllers/controller");
const {signup} = require("../controllers/controller")

route.get("/login",validateLogin, login);
route.get("/signup", signup);


module.exports = route;