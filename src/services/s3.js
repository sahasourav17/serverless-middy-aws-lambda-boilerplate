const { S3Client } = require('@aws-sdk/client-s3');
const variables = require('../config/variables');

const s3 = new S3Client({
  s3ForcePathStyle: true,
  region: variables.awsRegion
});

module.exports = {
  s3: s3
};
