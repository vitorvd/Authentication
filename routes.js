const express = require('express');
const UserController = require("./app/controllers/UserController");
const CommentController = require("./app/controllers/CommentController");

const routes = express.Router();

routes.post("/register", UserController.register);
routes.post("/login", UserController.login);
routes.post("/comentar", CommentController.comment);

module.exports = routes;