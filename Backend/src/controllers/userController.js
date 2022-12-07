// const model = require("model");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const { model } = require("mongoose");
const { httpConstant, httpCode } = require("../utils/httpConstant");
const { successResponse } = require("../utils/controllerResponse");
// const SECRET_KEY = process.env.En

const getUserProfile = async function (requset, response) {
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

module.exports = {
  getUserProfile,
};
