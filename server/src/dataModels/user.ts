import { User, UserPayload } from "../@types/user";
import knex from "../database/knexConnection";

const database = {
  newUser: async (userPayload: UserPayload): Promise<User> => {
    const newUser: User = await knex("users").insert(userPayload);
    return newUser;
  },
};

export default database;
