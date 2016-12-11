'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('comment', {
    Text: DataTypes.STRING,
    PostId:DataTypes.INTEGER,
    Score:DataTypes.INTEGER,
    CreationDate:DataTypes.DATE,
    UserId:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comment;
};