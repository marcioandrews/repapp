import { Router } from "express";
import CardsController from "./controllers/CardsController";
import ColumnsController from "./controllers/ColumnsController";
import UsersController from "./controllers/UsersController";
import AuthController from "./controllers/AuthController";
import AuthMiddleware from "./middlewares/AuthMiddleware";

const routes = Router();

// index, show, create, update, delete

routes.post('/auth', AuthController.authenticate);

routes.get('/users', AuthMiddleware, UsersController.index);
routes.get('/user/:id', AuthMiddleware, UsersController.show);
routes.delete('/user/:id', AuthMiddleware, UsersController.delete);
routes.patch('/user/:id', UsersController.restore);
routes.put('/user/:id', AuthMiddleware, UsersController.update);
routes.post('/user', UsersController.create);

routes.get('/columns/:id', AuthMiddleware, ColumnsController.index);
routes.get('/column/:id', AuthMiddleware, ColumnsController.show);
routes.delete('/column/:id', AuthMiddleware, ColumnsController.delete);
routes.patch('/column/:id', AuthMiddleware, ColumnsController.restore);
routes.put('/column/:id', AuthMiddleware, ColumnsController.update);
routes.post('/column', AuthMiddleware, ColumnsController.create);

routes.get('/cards/:id', AuthMiddleware, CardsController.index);
routes.get('/card/:id', AuthMiddleware, CardsController.show);
routes.delete('/card/:id', AuthMiddleware, CardsController.delete);
routes.patch('/card/:id', AuthMiddleware, CardsController.restore);
routes.put('/card/:id', AuthMiddleware, CardsController.update);
routes.post('/card', AuthMiddleware, CardsController.create);


export default routes