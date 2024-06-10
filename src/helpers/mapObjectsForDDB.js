const mapObjectForDDB = (columns, data) => {
  const preparedData = {};
  Object.keys(data).map((key) => {
    if (data[key] && columns.includes(key)) {
      preparedData[key] = data[key];
    }
  });

  return preparedData;
};

module.exports = mapObjectForDDB;
