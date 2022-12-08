"use strict";

const { errorResponse } = require("../utils/controllerResponse");
const { httpCode } = require("../utils/httpConstant");

let createObject = async (model, request, response) => {
  try {
    let createdAt = new Date().toISOString();
    let reqObject = new Object.assign({}, request.body);
  } catch (error) {
    return errorResponse(request, response, httpCode.NOT_FOUND);
  }
};
