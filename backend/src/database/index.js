import Sequelize from 'sequelize'
import config from '../config/config.js'
import User from '../models/User.js'
import Comment from '../models/Comment.js'

let connection = new Sequelize(config);
User.init(connection);
Comment.init(connection);