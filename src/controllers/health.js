exports.health = async (event, context) => {
  const data = {
    status: "ok",
    message: "Service is at good health",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
