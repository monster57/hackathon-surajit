'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING
      },
      reputation:{
        type: Sequelize.INTEGER
      },
      creationDate:{
        type: Sequelize.DATE
      },
      lastAccessDate:{
        type: Sequelize.DATE
      },
      location:{
        type: Sequelize.STRING
      },
      aboutMe:{
        type: Sequelize.STRING
      },
      views:{
        type: Sequelize.INTEGER
      },
      upVotes:{
        type: Sequelize.INTEGER
      },
      downVotes:{
        type: Sequelize.INTEGER
      },
      age:{
        type: Sequelize.INTEGER
      },
      AccountId:{
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
    return queryInterface.dropTable('users');
  }
};