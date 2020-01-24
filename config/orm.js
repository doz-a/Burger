// import connection.js 
var connection = require('../config/connection.js');

// selectAll method 

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], cb);
    }
    // insert One row of data Method 
    // update One burger method 
};




// Export orm 
module.exports = orm;