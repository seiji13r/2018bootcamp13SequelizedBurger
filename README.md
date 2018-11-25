# 2018bootcamp13SequelizedBurger <!-- omit in toc --> 

- [Overview](#overview)
    - [Web App Usage](#web-app-usage)
    - [Deployed App](#deployed-app)
    - [Sequelize CLI](#sequelize-cli)
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
npm install express sequelize mysql2
initialize config models migrations with sequelize-cli

create server.js

create routes
create public
create public/assets
create views
create db/schema.sql

create the Models with sequelize-cli

