var express = require('express');

// Import burger model
var burger = require('../models/burger.js');

var router = express.Router();
// Create routes here

// Create routes 
// router.get("/", function (req, res) {
//     burger.selectAll(function (data) {
//         console.log(data);
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

router.get('/', function (req, res) {
    burger.selectAll(function (error, data) {
        res.json(data);
    });
});

// Insert a burger into burger db 
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, function (res) {
        console.log(res);
        res.redirect('/');
    })
})

// Test 
// var burger = require('./models/burger');
// app.get('/', function (req, res) {
//     burger.selectAll(function (error, data) {
//         res.json(data);
//     });
// });

// app.get('/', function (req, res) {
//     burger.insertOne(function (error, data) {
//         res.json(data);
//     });
// });
// End test 

module.exports = router;