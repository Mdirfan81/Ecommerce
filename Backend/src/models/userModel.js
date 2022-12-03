"use strict";

const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

let userDataFields = {
  empoyeeId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  email: { type: String },
  status: { type: Boolean, default: true },
};

let userSchema = new SCHEMA(Object.assign({}, userDataFields));
let userModel = MONGOOSE.model("user", userSchema);
module.exports = userModel;
