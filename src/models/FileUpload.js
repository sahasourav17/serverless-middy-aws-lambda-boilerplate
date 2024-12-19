const variables = require("../config/variables");
const { s3 } = require("../services/s3");
const uploadFile = async (buffer, name, mimeType) => {
  const params = {
    Bucket: variables.bucketName,
    Key: name,
    Body: buffer,
    CacheControl: "no-cache",
    ContentType: mimeType,
  };

  return await s3
    .putObject(params)
    .promise()
    .then((res) => res)

    .catch((err) => {
      console.log("Error", err);
      throw {
        status: 406,
        message: err,
      };
    });
};
module.exports = {
  uploadFile,
};
