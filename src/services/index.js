const { s3 } = require('./s3');
const { ddb } = require('./ddb');
const { sns } = require('./sns');
const { sqs } = require('./sqs');

module.exports = {
  s3,
  ddb,
  sns,
  sqs
};
