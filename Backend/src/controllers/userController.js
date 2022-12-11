// const model = require("model");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const { httpCode } = require("../utils/httpConstant");
const { successResponse } = require("../utils/controllerResponse");
const { createObject, getUserObject } = require("./queryManager");
const model = require("../models/userModel");
// const SECRET_KEY = process.env.En

const setUser = async function (requset, response) {
  try {
    console.log("Wel Come");
    // let data =await model.find("1")
    let result = "Wel come Irfan";
    // return response.status(200).send("IN THE GETUSERPROFILE");
    return successResponse(response, httpCode.OK_REQUEST, result);
  } catch (error) {
    return error;
  }
};

const createUser = async function (req, res) {
  return createObject(model, req, res);
};

const getUser = async (req, res) => {
  console.log("function 1");
  return getUserObject(model, req, res);
};
module.exports = {
  setUser,
  getUser,
  createUser,
};
