const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const variables = require("../config/variables");
const {
  PutCommand,
  UpdateCommand,
  GetCommand,
  DeleteCommand,
  DynamoDBDocumentClient
} = require("@aws-sdk/lib-dynamodb");

const ddbClient = new DynamoDBClient({
  region: variables.awsRegion
});

const docClient = DynamoDBDocumentClient.from(ddbClient);

async function createItem(tableName, item) {
  const params = {
    TableName: tableName,
    Item: item
  };
  const command = new PutCommand(params);
  return docClient.send(command);
}

async function getItem(tableName, key) {
  const params = {
    TableName: tableName,
    Key: key
  };
  const command = new GetCommand(params);
  const { Item } = await docClient.send(command);
  return Item;
}

async function updateItem(tableName, opKey, attributesToUpdate) {
  const params = {
    TableName: tableName,
    Key: opKey,
    UpdateExpression: "SET ",
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
    ReturnValues: "ALL_NEW"
  };
  let updateExpression = "";
  const expressionAttributeNames = {};
  const expressionAttributeValues = {};
  Object.keys(attributesToUpdate).forEach((key, index) => {
    updateExpression += `${index > 0 ? ", " : ""}#${key} = :${key}`;
    expressionAttributeNames[`#${key}`] = key;
    expressionAttributeValues[`:${key}`] = attributesToUpdate[key];
  });
  params.UpdateExpression += updateExpression;
  params.ExpressionAttributeNames = expressionAttributeNames;
  params.ExpressionAttributeValues = expressionAttributeValues;

  const command = new UpdateCommand(params);
  const { Attributes } = await docClient.send(command);
  return Attributes;
}

async function deleteItem(tableName, key) {
  const params = {
    TableName: tableName,
    Key: key
  };
  const command = new DeleteCommand(params);
  return docClient.send(command);
}

module.exports = {
  ddb: ddbClient,
  createItem,
  getItem,
  updateItem,
  deleteItem
};
