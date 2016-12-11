'use strict';
module.exports = function(sequelize, DataTypes) {
    var post = sequelize.define('post', {
        PostTypeId: {
            type: DataTypes.INTEGER
        },
        AcceptedAnswerId: {
            type: DataTypes.INTEGER
        },
        Body: {
            type: DataTypes.STRING
        },
        CreationDate: {
            type: DataTypes.DATE
        },
        Score: {
            type: DataTypes.INTEGER
        },
        ViewCount: {
            type: DataTypes.INTEGER
        },
        OwnerUserId: {
            type: DataTypes.INTEGER
        },
        LastEditorUserId: {
            type: DataTypes.INTEGER
        },
        LastEditDate: {
            type: DataTypes.DATE
        },
        LastActivityDate: {
            type: DataTypes.DATE
        },
        Title: {
            type: DataTypes.STRING
        },
        Tags: {
            type: DataTypes.STRING
        },
        AnswerCount: {
            type: DataTypes.INTEGER
        },
        CommentCount: {
            type: DataTypes.INTEGER
        },
        FavoriteCount: {
            type: DataTypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return post;
};
