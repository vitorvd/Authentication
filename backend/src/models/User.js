'use strict';
import pkg from 'sequelize'
const { Model, DataTypes } = pkg;

class User extends Model {
    static init(connection) {
        super.init({
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
            }, {
                sequelize: connection
            }
        );
    }
}

export default User;