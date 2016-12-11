'use strict';
module.exports = function(sequelize, DataTypes) {
  var postLink = sequelize.define('postLink', {
    CreationDate: DataTypes.DATE,
    PostId:DataTypes.INTEGER,
    RelatedPostId: DataTypes.INTEGER,
    LinkTypeId:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return postLink;
};