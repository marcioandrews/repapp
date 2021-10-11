import { Response, Request } from "express";
import { Card, CardsPayload } from "../@types/cards";
import cardTable from "../dataModels/card";

const cardsController = {
  newCard: async (req: Request, res: Response) => {
    const cardPayload: CardsPayload = req.body;
    const newCard: Card = await cardTable.newCard(cardPayload);
    return newCard;
  },
};

export default cardsController;
