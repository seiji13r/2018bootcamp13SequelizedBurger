var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Important: As the views directory is inside app directory it is important so specify the reference paths.
// partialsDir: "views/partials"
// layoutsDir: "views/layouts"
// app.set('views', "app/views");  <-- If views is placed in other part.
app.engine("handlebars", exphbs({ layoutsDir: "views/layouts", partialsDir: "views/partials", defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./app/controllers/burgers_controller.js");
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Requiring our models for syncing
const db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
