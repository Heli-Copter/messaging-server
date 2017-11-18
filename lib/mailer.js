'use strict';

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

var mailer = {
    sendMail: function sendmailfn(mail, cb) {
        transporter.sendMail(mail, cb);
    }
};

module.exports = mailer;
