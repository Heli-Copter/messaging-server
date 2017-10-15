'use strict';

var util = require('util');
var errorMap = require('../lib/errorMap');
var _ = require('lodash');

var ApiError = function (errorCode, options) {

  this.errorCode = errorCode;
  var mappedError = errorMap.codeMap[errorCode] || {};
  this.httpStatusCode = mappedError.status || 400;
  var message = mappedError.message || "Some error occured";
  //Replace variables in message. Variable in message should be like eg message = "Validation failed for id : <id>"
  _.keys(options || {}).forEach(function(key) {message = message.replace("<" + key + ">", options[key]);});
  this.message = message;

  Error.captureStackTrace(this, ApiError);
};

util.inherits(ApiError, Error);

module.exports = ApiError;