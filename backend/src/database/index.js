import Sequelize from 'sequelize'
import config from '../config/database.cjs'
import User from '../models/User.js'
import Comment from '../models/Comment.js'

let connection = new Sequelize(config);
User.init(connection);

Comment.init(connection);
Comment.associate(connection.models);