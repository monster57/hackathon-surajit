'use strict';
module.exports = function(sequelize, DataTypes) {
  var badge = sequelize.define('badge', {
    Name: DataTypes.STRING,
    UserId:DataTypes.INTEGER,
    Date:DataTypes.DATE,
    Class:DataTypes.STRING,
    TagBased:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return badge;
};