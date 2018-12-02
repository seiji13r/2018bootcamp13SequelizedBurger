# 2018bootcamp13SequelizedBurger <!-- omit in toc --> 

- [Overview](#overview)
    - [Web App Usage](#web-app-usage)
    - [Deployed App](#deployed-app)
    - [Sequelize CLI](#sequelize-cli)
- [Create the Server JS](#create-the-server-js)
- [Deployment Ready](#deployment-ready)
# Overview

Eat-Da-Burger it is a web app which showcase the capabilities of some important web technologies working together such as:

NodeJS, Express, Handlebars, Sequelize, MySQL and Heroku in action.

## Web App Usage

* The user will have a Text Box available to type and submit the name of the Burger of his/her like.
* All these burgers will pile up in the left side of the window with a button to activate the action of devour the Burger.
* Once a burger is `Devoured` this will be piled up in the right side of the window.
* All the Burgers will be stored in the database.

## Deployed App

[Eat-Da-Burger-2](https://seiji-eat-da-burger-2.herokuapp.com/)

## Sequelize CLI
sequelize init:models & sequelize init:config & sequelize init:migrations

sequelize model:create --name Burger --attributes burger_name:STRING,devoured:BOOLEAN


Process
Repositoy Created
Create .gitignore
Create README.md
npm init
npm install express sequelize mysql2 express-handlebars

Sequelize Initialization
```bash
# Create all the sequelize directories: config, models, migrations and seeds
sequelize init
# Create only the required migrations.
sequelize init:models & sequelize init:config & sequelize init:migrations
```
Create the db directory and create inside the sql file with the Data Base or Schema Creation.
Run the sql and Create the Schema.

Edit the file config/config.json with the development Database information: User, Password, Host, Port, etc...

* Initialize the Models with sequelize-cli
Create the Burger Model \
From inside the project Directory:
`sequelize model:generate --name Burger --attributes burger_name:string,devoured:boolean` \
Note: Make sure not to use spaces between the commas in the attributes definition. \
Edit model and migration files to be consistent with the table definition. 
Add `defaultValue: false,` in devoured attribute.

Execute the Migration to create the table
`sequelize db:migrate`
`sequelize db:migrate --env development`

To production:
`sequelize db:migrate --env production`

[Migration File Reference](http://docs.sequelizejs.com/manual/tutorial/migrations.html)
[Query Interface Reference](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html)

# Create the Server JS
create server.js
Get Dependencies required and configured:
express
    port configuration
    static directory defined
    Parse application body
        urlencoded
        json
handlebars
    set it and require it
express
    define the engine as handlebars with the layout and partials directories and default layout name.
    set the view engine
    set the views directory
require the routes file
make express app to use them.

Requiring our models directory **NOTE** our entry point will be index.js `const db = require("./models")`
Syncing our sequelize models and then starting our Express app

* Create the Handlebars Files
    * Create the `views directory`.
    * Create the `views/layouts/main.handlebars` files as default layout.
    * Create the `views/index.handlebars` as entry point to render.
    * Create the `views/partials/burgers/burger-block.handlebars` to include rendering into index.
* Create the `public/assets` directory and include all static files required. `styles` and `javascript for the frontend`.
* Create the `routes` files.
    * `htmlRoutes.js` file containing get routes.
    * `apiRoutes.js` file containing post routs for API request.
    * Include the models call in these files to use them there.
* Update `server.js` to make the calls to the routes files.

sequelize

create routes
create public
create public/assets
create views
create db/schema.sql

create the Models with sequelize-cli

# Deployment Ready

Include the JAWS MySQL add-on service to the Heroku Project

Edit the file config/config.json and update the database_production information with JAWS MySQL Info: User, Password, Host, Port, etc...

To production:
`sequelize db:migrate --env production`