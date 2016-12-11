'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PostTypeId:{
        type: Sequelize.INTEGER
      },
      AcceptedAnswerId:{
        type: Sequelize.INTEGER
      },
      Body: {
        type: Sequelize.STRING
      },
      CreationDate: {
        type: Sequelize.DATE
      },
      Score:{
        type: Sequelize.INTEGER
      },
      ViewCount:{
        type: Sequelize.INTEGER
      },
      OwnerUserId:{
        type: Sequelize.INTEGER
      },
      LastEditorUserId:{
        type: Sequelize.INTEGER
      },
      LastEditDate: {
        type: Sequelize.DATE
      },
      LastActivityDate:{
        type: Sequelize.DATE
      },
      Title:{
        type: Sequelize.STRING
      },
      Tags:{
        type: Sequelize.STRING
      },
      AnswerCount:{
        type: Sequelize.INTEGER
      },
      CommentCount:{
        type: Sequelize.INTEGER
      },
      FavoriteCount:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('posts');
  }
};