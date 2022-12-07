let successResponse = function (response, code, result) {
  if (result === null) {
    return response.sendStatus(code);
  } else {
    return response.status(code).json({
      statusCode: code,
      result: result,
    });
  }
};

module.exports = {
  successResponse,
};
