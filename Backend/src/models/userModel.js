"use strict";

const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

let userDataFields = {
  customerId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  status: { type: Boolean, default: true },
  gender: { type: String },
  dateOfBirth: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  admin: { type: Boolean, default: false },
};

let userSchema = new SCHEMA(Object.assign({}, userDataFields));
let userModel = MONGOOSE.model("user", userSchema);
module.exports = userModel;
