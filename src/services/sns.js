const {
  SNSClient,
  CreatePlatformEndpointCommand,
  SubscribeCommand
} = require("@aws-sdk/client-sns");

const variables = require("../config/variables");

const sns = new SNSClient({
  region: variables.awsRegion
});

const createSNSPlatformEndpoint = async (
  platformApplicationArn,
  deviceToken
) => {
  try {
    const params = {
      PlatformApplicationArn: platformApplicationArn,
      Token: deviceToken
    };

    const command = new CreatePlatformEndpointCommand(params);
    const response = await sns.send(command);
    return response.EndpointArn;
  } catch (error) {
    console.error("Error creating platform endpoint:", error.message);
    throw error;
  }
};

const subscribeEndpointToTopic = async (topicArn, endpointUrl, userId) => {
  try {
    const params = {
      Protocol: "application",
      TopicArn: topicArn,
      Endpoint: endpointUrl,
      // Attributes: {
      //   FilterPolicy: JSON.stringify({ userId: [userId] })
      // },
      ReturnSubscriptionArn: true || false
    };
    const command = new SubscribeCommand(params);
    const response = await sns.send(command);
    return response.SubscriptionArn;
  } catch (error) {
    console.error("Error subscribing endpoint to topic:", error.message);
    throw error;
  }
};

module.exports = {
  sns: sns,
  createSNSPlatformEndpoint,
  subscribeEndpointToTopic
};
