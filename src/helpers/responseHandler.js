/**
 *
 * @param {number} statusCode
 * @param {object=} data
 * @param {string=} message
 * @param {number=} totalCount
 * @returns
 */

const responseHandler = (statusCode, data, message, totalCount) => ({
  statusCode: statusCode,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: message || undefined,
    data: data || undefined,
    totalCount: totalCount || undefined
  })
});

module.exports = responseHandler;
