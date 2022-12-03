// const model = require("model");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const { model } = require("mongoose");

// const SECRET_KEY = process.env.En

const getUserProfile = async function (requset, response) {
  try {
    // let data =await model.find("1")
    response.status(200).send("IN THE GETUSERPROFILE");
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUserProfile,
};
