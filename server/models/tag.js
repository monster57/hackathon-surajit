'use strict';
module.exports = function(sequelize, DataTypes) {
  var tag = sequelize.define('tag', {
    TagName: DataTypes.STRING,
    Count:DataTypes.INTEGER,
    ExcerptPostId:DataTypes.INTEGER,
    WikiPostId:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tag;
};