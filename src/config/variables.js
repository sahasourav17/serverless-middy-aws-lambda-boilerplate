const env = process.env.APP_ENV || "local";
const appPort = process.env.APP_PORT;
const host = process.env.HOST || "localhost";
const awsRegion = process.env.AWS_REGION;
const loggerName = process.env.LOGGER_NAME;
const logLevel = process.env.LOG_LEVEL;
const apiPath = process.env.API_PATH;
const bucketName = process.env.BUCKET_NAME;

const fileConfiguration = {
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
  fileExtensions: [".*"],
  includeEmptyFields: true,
};

const variables = {
  appPort,
  env,
  host,
  awsRegion,
  loggerName,
  logLevel,
  apiPath,
  bucketName,
  fileConfiguration,
};

module.exports = variables;
