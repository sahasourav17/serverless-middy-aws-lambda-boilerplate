const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");
const ksuid = require("ksuid");
const variables = require("../config/variables");

const sqs = new SQSClient({
  apiVersion: "2012-11-05",
  region: variables.awsRegion
});

const sendSQSMessage = async ({ queueUrl, groupId, body, messageType }) => {
  const command = new SendMessageCommand({
    QueueUrl: queueUrl,
    MessageGroupId: groupId,
    MessageAttributes: {
      messageType: {
        DataType: "String",
        StringValue: messageType.toUpperCase()
      }
    },
    MessageDeduplicationId: ksuid.randomSync().string,
    MessageBody: JSON.stringify(body)
  });

  const response = await sqs.send(command);
  return response;
};

module.exports = {
  sqs: sqs,
  sendSQSMessage
};
