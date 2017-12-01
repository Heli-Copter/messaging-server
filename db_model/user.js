'use strict';

var db = require('./db');

var user = {
    createUser: function (userDetails, cb) {
        console.log("user details received: ", userDetails);
        var dbQuery = "INSERT INTO user (first_name, last_name, email, mobile, password, is_active, is_enabled) VALUES ('" + userDetails.first_name + "', '" + userDetails.last_name + "', '" + userDetails.email + "', " + userDetails.mobile + ", '" + userDetails.password + "', 1, 1);";
        db.query(dbQuery, function (e, r) {
            if (e) { return cb(e); }
            cb(null, r);
        });
    },
    validateUser: function (userDetails, cb) {
        console.log("Authenticating user with details: ", userDetails);
        var dbQuery = "SELECT * FROM user WHERE '" + userDetails.userID + "' IN(email, mobile);";
        db.query(dbQuery, function (e, r) {
            if (e) { return cb(e); }
            cb(null, r);
        });
    },
    disableUser: function (userDetails, cb) {
        var dbQuery = "UPDATE user SET is_enabled= '" + 0 + "' WHERE email= '" + userDetails.email + "'";
        console.log(dbQuery)
        db.query(dbQuery, function (e, r) {
            if (e) { return cb(e); }
            cb(null, r);
        });
    },
    isEmailAvailable: function (userDetails, cb) {
        var dbQuery = "SELECT id, email FROM user WHERE email= '" + userDetails.email + "'";
        db.query(dbQuery, function (e, r) {
            if (e) { return cb(e); }
            cb(null, r);
        });
    }
};

module.exports = user;
