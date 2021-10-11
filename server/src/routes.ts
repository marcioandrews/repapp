import { Response, Request, Router } from "express";
import authController from "./controllers/auth";
import cardsController from "./controllers/cards";

const routes = Router();

routes.post("/user:create", authController.newUser);
routes.post("/card:create", cardsController.newCard);

export default routes;
