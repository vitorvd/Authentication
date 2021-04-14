'use strict';
const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
            },
            {
                sequelize, 
                timestamps: false,
            }
        );
    }
}

module.exports = User;