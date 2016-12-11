'use strict';
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        DisplayName: {
            type: DataTypes.STRING
        },
        Reputation: {
            type: DataTypes.INTEGER
        },
        CreationDate: {
            type: DataTypes.DATE
        },
        LastAccessDate: {
            type: DataTypes.DATE
        },
        Location: {
            type: DataTypes.STRING
        },
        AboutMe: {
            type: DataTypes.STRING
        },
        Views: {
            type: DataTypes.INTEGER
        },
        UpVotes: {
            type: DataTypes.INTEGER
        },
        DownVotes: {
            type: DataTypes.INTEGER
        },
        Age: {
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
