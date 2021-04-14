'use strict';
const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
    static init(sequelize) {
        super.init(
            {
                user: DataTypes.STRING,
                comment: DataTypes.STRING,
            },
            {
                sequelize, 
                timestamps: false,
            }
        );
    }
}

module.exports = Comment;