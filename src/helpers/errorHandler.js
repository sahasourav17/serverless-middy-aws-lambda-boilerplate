const { statusCodes } = require("./statusCodes");

const errorHandler = (err) => {
  const { status, data = {}, message = null } = err;

  const headers = {
    "Content-Type": "application/json"
  };

  let response = {};

  const responseGenerator = (statusCode, defaultMessage) => ({
    statusCode: statusCode,
    headers,
    body: JSON.stringify({
      message: message || { ...data } || defaultMessage
    })
  });

  switch (status) {
    case statusCodes.BAD_REQUEST:
      response = responseGenerator(statusCodes.BAD_REQUEST, "Bad request");
      break;
    case statusCodes.UNAUTHORIZED:
      response = responseGenerator(
        statusCodes.UNAUTHORIZED,
        "Authentication Failed"
      );
      break;
    case statusCodes.NOT_FOUND:
      response = responseGenerator(statusCodes.NOT_FOUND, "Resource Not found");
      break;
    case statusCodes.SERVICE_UNAVAILABLE:
      response = responseGenerator(
        statusCodes.SERVICE_UNAVAILABLE,
        "Service unavailable"
      );
      break;
    default:
      response = {
        statusCode: statusCodes.INTERNAL_SERVER_ERROR,
        headers,
        body: "Internal Error"
      };
  }

  return response;
};

module.exports = errorHandler;
