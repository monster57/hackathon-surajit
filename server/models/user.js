'use strict';
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        displayName: {
            type: DataTypes.STRING
        },
        reputation: {
            type: DataTypes.INTEGER
        },
        creationDate: {
            type: DataTypes.DATE
        },
        lastAccessDate: {
            type: DataTypes.DATE
        },
        location: {
            type: DataTypes.STRING
        },
        aboutMe: {
            type: DataTypes.STRING
        },
        views: {
            type: DataTypes.INTEGER
        },
        upVotes: {
            type: DataTypes.INTEGER
        },
        downVotes: {
            type: DataTypes.INTEGER
        },
        age: {
            type: DataTypes.INTEGER
        },
        AccountId: {
            type: DataTypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return user;
};
