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

routes.get('/columns/:id', ColumnsController.index);
routes.get('/column/:id', ColumnsController.show);
routes.delete('/column/:id', ColumnsController.delete);
routes.patch('/column/:id', ColumnsController.restore);
routes.put('/column/:id', ColumnsController.update);
routes.post('/column', ColumnsController.create);

routes.get('/cards/:id', CardsController.index);
routes.get('/card/:id', CardsController.show);
routes.delete('/card/:id', CardsController.delete);
routes.patch('/card/:id', CardsController.restore);
routes.put('/card/:id', CardsController.update);
routes.post('/card', CardsController.create);


export default routes