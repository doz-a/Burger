// Smport connection.js 
var connection = require('../config/connection.js');

// SelectAll method 

var orm = {

    // Select all method 
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], cb);
    },
    // SnsertOne: function (tableInput, ..., cb) {
    insertOne: function (tableInput, tableName, burgerName, cb) {
        var queryString = "INSERT INTO ?? (?) VALUES (?)";
        connection.query(queryString, [tableInput, tableName, burgerName], cb);
    }
    // },
    // SpdateOne: function (tableInput, ..., cb) {

    // }
};




// Export orm 
module.exports = orm;