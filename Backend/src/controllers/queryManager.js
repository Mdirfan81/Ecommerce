"use strict";

const {
  errorResponse,
  successResponse,
} = require("../utils/controllerResponse");
const { httpCode } = require("../utils/httpConstant");

let createObject = async (model, request, response) => {
  try {
    let createdAt = new Date().toISOString();
    // let reqObject = new Object.assign({}, request.body);
    let reqObject = new model(request.body);
    reqObject = await reqObject.save();
    // console.log({reqObject})
    return successResponse(response, httpCode.OK_REQUEST, reqObject);
  } catch (error) {
    return errorResponse(request, response, httpCode.NOT_FOUND);
  }
};

let getUserObject = async (model, request, response) => {
  try {
    // let userId = request.body.userId
    // let userId = request.params.id;
    console.log(request.params.id);
    // let userObj = await model.findOne({ customerId: request.params.id });
    console.log(userObj);
  } catch {
    return errorResponse(request, response, httpCode.NOT_FOUND);
  }
};

module.exports = {
  createObject,
  getUserObject,
};
