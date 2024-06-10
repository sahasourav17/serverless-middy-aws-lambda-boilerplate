const { SSMClient } = require('@aws-sdk/client-ssm');
const variables = require('../config/variables');

const ssmClient = new SSMClient({
  region: variables.awsRegion
});

module.exports = {
  ssm: ssmClient
};
