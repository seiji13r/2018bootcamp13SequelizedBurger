var db = require("../models");

module.exports = function(app) {
  app.post("/api/newburger", function(req, res) {
    // console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then (function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  app.delete("/api/burger/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });
  
  app.put("/api/burger/devour/:id", function(req, res) {
    db.Burger.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        res.json(result);
      });
    });
};