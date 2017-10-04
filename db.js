var mysql = require('mysql');

var database = {
    connection : mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql@123',
        database: 'pets'
    }),
    connect: function () {
        this.connection.connect();
    },
    query: function (queryText) {
        this.connection.query(queryText, function (err, results, fields) {
            if(!err) {
                results.map(function (result) {
                    console.log('name: ', result.name);
                });
            } else {
                console.log('An error occured: ', err);
            }

        })
    },
    end: function () {
        this.connection.end();
    }
};

module.exports = database;