require("dotenv").config();

const middy = require("@middy/core");
const httpRouterHandler = require("@middy/http-router");
const httpHeaderNormalizer = require("@middy/http-header-normalizer");
const multipartBodyParser = require("@middy/http-multipart-body-parser");
const { fileConfiguration } = require("./config/variables");
const { loggerMiddleware } = require("./middlewares/logMiddleware");
const routes = require("./routes");

exports.handler = middy()
  .use(loggerMiddleware())
  .use(httpHeaderNormalizer())
  .use(multipartBodyParser(fileConfiguration))
  .handler(httpRouterHandler(routes));
