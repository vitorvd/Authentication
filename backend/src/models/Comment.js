'use strict';
import pkg from "sequelize"
const { Model, DataTypes } = pkg;

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

export default Comment;