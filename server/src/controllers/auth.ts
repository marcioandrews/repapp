import { User, UserPayload } from "../@types/user";
import usersTable from "../dataModels/user";
import { Response, Request, Router } from "express";

const authController = {
  newUser: async (req: Request, res: Response) => {
    const userPayload: UserPayload = req.body;
    const newUser: User = await usersTable.newUser(userPayload);
    return res.json(newUser);
  },
};

export default authController;
