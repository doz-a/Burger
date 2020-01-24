// Importing orm 
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    }
};

module.exports = burger