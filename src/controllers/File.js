const { bucketName, awsRegion } = require("../config/variables");
const { uploadFile } = require("../models/FileUpload");

exports.uploadImage = async (event) => {
  try {
    const content = event.body;
    const { userId } = event.pathParameters;
    const assetName = `profile_pictures/${userId}_${content.file.filename}`;


    const objectUrl = await uploadFile(
      content.file.content,
      assetName,
      content.file.mimetype
    );
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Successfully uploaded user image",
        objectUrl,
      }),
    };
  } catch (err) {
    console.log("Error uploading user image", err);
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Error while uploading user image",
      }),
    };
  }
};
