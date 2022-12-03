const express = require("express");
const route = express.Router();
const controller = require("../controllers/userController");

route.get("/userDetail", controller.getUserProfile);

module.exports = route;
