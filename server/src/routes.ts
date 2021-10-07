import { Response, Request, Router } from "express";
import authController from "./controllers/auth";

const routes = Router();

routes.post("/user:create", authController.newUser);

export default routes;
