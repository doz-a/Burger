// Importing orm 
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function (burgerInput, cb) {
        orm.insertOne(["burgers", "burger_name", burgerInput], cb)
    }
    // updateOne: function () {
    //     orm.updateOne("burgers", ..., cb)
    // }
};

module.exports = burger