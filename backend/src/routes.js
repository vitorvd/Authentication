import express from 'express'
import UserController from "./controllers/UserController.js"
import CommentController from "./controllers/CommentController.js"

const routes = express.Router();

routes.post("/register", UserController.register);
routes.post("/login", UserController.login);
routes.post("/comentar", CommentController.comment);

export default routes;