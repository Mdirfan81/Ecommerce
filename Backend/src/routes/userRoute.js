const express = require("express");
const route = express.Router();
const controller = require("../controllers/userController");

route.get("/userDetail", controller.setUser);
route.get("/user/:id", controller.getUser);
route.post("/createUser", controller.createUser);

module.exports = route;
