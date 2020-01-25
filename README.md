# Burger
Using Express Handlebars to create a full stack burger app

1/25/2020
Version 1

# Basic Use
Eat the burgers is a full stack application that a user can consume burgers with. A user can add a burger by typing the name of the burger and clicking "add burger". You can also choose if the burger has been eaten, or if it is ready to be eaten.

The user can also devour the burger, which puts the burger in the stomach.

The user can throw the burger up, which puts the burger on the table, ready to eat again!

Digesting the burger causes the burger to be forever gone.

# App Organization - MVC model

### config
1. connection.js Basic connections to mySQL
2. orm.js Broad ORM connecting to model

### controllers
1. burger_controller.js Contains routes for the CRUD method

### public
1. Contains img of cat eating burger
2. burger_button.js Contains jquery function of the burger devour, digest, throw up buttons

### views
1. Contains the handlebars files
2. burgerbuttons.handlebars are the partials for the HTML of each burger
3. index.handlebars contains the layout of the handlebars HTML

### server.js
1. Server of the application connecting handlebars, routes and methods

## Technologies used
1. Javascript
2. NodeJS packages
3. Heroku
4. HTML
5. API
6. Handlebars
7. mySQL

## Developers
1. Miguel Delos Santos

## Future Development
1. Add login for users
2. Use a burger API that can show the pictures of burgers

Thanks for reading!

(//)<(0.0)>(//)

1/25/2020