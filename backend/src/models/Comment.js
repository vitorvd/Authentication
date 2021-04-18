'use strict';
import pkg from "sequelize"
const { Model, DataTypes } = pkg;

class Comment extends Model {
    static init(connection) {
        super.init({
                comment: DataTypes.STRING,
            }, {
                sequelize: connection
            }
        );
    }

    static associate(models) {
        //foreignKey = chave estrangeira da coluna Comment
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'comment_user' })
    }
}

export default Comment;