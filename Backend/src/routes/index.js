"use strict";
const express = require("express");
const route = express.Router();

console.log("IN page 2");
route.use("/user", require("./userRoute"));
// route.use("/product", require("./productRoute"));

module.exports = route;
