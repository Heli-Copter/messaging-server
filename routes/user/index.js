'use strict';

var async = require('async');

var APIError = require('../../lib/apiError');
var userDb = require('../../db_model').user;

module.exports = {
	userSignUp: function(req, res, next) {

	async.waterfall([
       _setData,
       _signUpUser
      ], function (err, resp) {
    if (err) {
      return next(new APIError('NO_BODY_FE'));
    } else {
        req.sendResult = resp;
      return next();
    }
  });

	function _setData (cb) {
		if(!req || !req.body) {
			return next(new APIError('NO_BODY_FE'));
		}
		if(!req.body.firstName){
			return next(new APIError('NO_EMF'));
		}
		var userDetails = {
			first_name : req.body.firstName,
			last_name : req.body.lastName,
			email : req.body.email,
			mobile : req.body.mobile,
			password : req.body.password
		};
		cb(null, userDetails);
	}

	function _signUpUser (userDetails, cb) {
		userDb.createUser(userDetails, function(e,r) {
			if(e) {
				return next(e);
			}
			if(!r) {
				return next(new APIError('NO_RES_FE'));
			}
			var result = { resp : 'User signup successful with insert id: ' + r.insertId };
			return cb(null, result);
		});
	}
	}
};