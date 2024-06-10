const loggerMiddleware = (opts = {}) => {
  const options = { ...opts };
  const loggerMiddlewareBefore = (request) => {
    const { requestContext, multiValueHeaders, ...rest } = request.event;
    console.log({
      startSpan: {
        ...rest,
        ...multiValueHeaders
      }
    });
  };

  const loggerMiddlewareAfter = async (request) => {
    console.log({
      response: {
        status: request.response.statusCode,
        body: JSON.parse(request.response.body)
      }
    });
    console.log({
      finishSpan: {
        event: { ...request.event },
        response: { ...request.response }
      }
    });
  };

  const loggerMiddlewareOnError = async (request) => {
    console.log({ request });
  };

  return {
    before: loggerMiddlewareBefore,
    after: loggerMiddlewareAfter,
    onError: loggerMiddlewareOnError
  };
};

module.exports = { loggerMiddleware };
