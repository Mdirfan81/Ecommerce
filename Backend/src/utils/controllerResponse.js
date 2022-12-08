const successResponse = function (response, code, result) {
  if (result === null) {
    return response.sendStatus(code);
  } else {
    return response.status(code).json({
      statusCode: code,
      result: result,
    });
  }
};

const errorResponse = function (response, code) {
  return response.status(code).json({
    statusCode: code,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
