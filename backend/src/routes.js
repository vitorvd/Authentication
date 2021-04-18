import express from 'express'
import UserController from "./controllers/UserController.js"
import CommentController from "./controllers/CommentController.js"

const routes = express.Router();

routes.post("/users/register", UserController.register);
routes.post("/users/auth", UserController.login);
routes.post("/users/:user_id/comment", CommentController.comment);

export default routes;