const middy = require("@middy/core");
const cors = require("@middy/http-cors");
const httpErrorHandler = require("@middy/http-error-handler");
const { apiPath } = require("./config/variables");
const { health } = require("./controllers/health");
const { uploadImage } = require("./controllers/File");

const routes = [
  {
    method: "GET",
    path: `${apiPath}/health`,
    handler: middy(health).use(cors()).use(httpErrorHandler()),
  },
  {
    method: "POST",
    path: `${apiPath}/upload/{userId}`,
    handler: middy(uploadImage).use(cors()).use(httpErrorHandler()),
  },
];

module.exports = routes;
