var mysql = require('mysql');

var database = {
    connection : mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql@123',
        database: 'messaging'
    }),
    connect: function () {
        this.connection.connect();
    },
    query: function (queryText) {
        this.connection.query(queryText, function (err, results, fields) {

        })
    },
    end: function () {
        this.connection.end();
    }
};

module.exports = database;