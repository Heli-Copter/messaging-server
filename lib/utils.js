'use strict';

var util = require('util');

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
  },

  isValidPhone: function (phone) {

    if (!phone) {
      return false;
    }
    var regex = /^\d{10}$/;

    if (regex.test(String(phone))) {
      return true;
    }
    return false;
  },

  validateParams: function (params, required_keys) {
    var required_keys_length = required_keys.length;
    var missing_keys = [];
    for (var i = 0; i < required_keys_length; i++) {
      if (_.get(params, required_keys[i]) === undefined) {
        missing_keys.push(required_keys[i]);
      }
    }
    return missing_keys;
  }

};

module.exports = utils;
