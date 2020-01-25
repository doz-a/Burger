var express = require('express');

// Import burger model
var burger = require('../models/burger.js');

var router = express.Router();
// Create routes here

// Home page route
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Insert a burger into burger db 
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, function (res) {
        console.log(res);
        res.redirect('/');
    })
})

module.exports = router;