'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name:{
      allowNull: false,
      type: DataTypes.STRING
    },
    devoured: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};