// import connection.js 
var connection = require('../config/connection.js');

// selectAll method 

var orm = {
    selectAll: function (tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], cb);
    }
};



// insert One Method 
// update One method 

// Export orm 
module.exports = orm;