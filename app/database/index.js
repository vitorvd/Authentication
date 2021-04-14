const Sequelize = require('sequelize');
const config = require('../config/config.json');
const User = require("../models/User");
const Comment = require("../models/Comment");

let connection = new Sequelize(config);
User.init(connection);
Comment.init(connection);

module.exports = connection;