import { Card, CardsPayload } from "../@types/cards";
import knex from "../database/knexConnection";

const database = {
  newCard: async (cardPayload: CardsPayload): Promise<Card> => {
    const newCard: Card = await knex("cards").insert(cardPayload);
    return newCard;
  },
};

export default database;
