'use strict';

var util  = require('util');

var utils = {

  timeRequest: function (req, name) {
    name = name || 'no-name';
    var now = Date.now();
    if (!req.startTime) {
      req.startTime = now;
    }
    if (!req.reqTimes) {
      req.reqTimes = [];
    }

    req.reqTimes.push([name, now - req.startTime].join('-'));
    req.startTime = now;
  },
  
  isValidEmail: function (email_address) {

    if (!email_address) {
      return false;
    }
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (regex.test(String(email_address))) {
      return true;
    }
    return false;
  }

};

module.exports = utils;
