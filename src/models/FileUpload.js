const { PutObjectCommand } = require("@aws-sdk/client-s3");
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

  console.log("================params ============", params);
  const command = new PutObjectCommand(params);
  await s3.send(command);
  const objectUrl = `https://${variables.bucketName}.s3.amazonaws.com/${name}`;

  return objectUrl;

  //   return await s3
  //     .putObject(params)
  //     .promise()
  //     .then((res) => res)

  //     .catch((err) => {
  //       console.log("Error", err);
  //       throw {
  //         status: 406,
  //         message: err,
  //       };
  //     });
};
module.exports = {
  uploadFile,
};
