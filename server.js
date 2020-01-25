var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for app from "public" directory
app.use(express.static('public'));

// Parse request body as JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes here 
var routes = require('./controllers/burgers_controller');

app.use(routes);

// Start server 

app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});