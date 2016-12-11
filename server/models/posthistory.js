'use strict';
module.exports = function(sequelize, DataTypes) {
  var postHistory = sequelize.define('postHistory', {
    RevisionGUID: DataTypes.STRING,
    PostHistoryTypeId:DataTypes.INTEGER,
    PostId:DataTypes.INTEGER,
    CreationDate:DataTypes.DATE,
    UserId:DataTypes.INTEGER,
    Text:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return postHistory;
};