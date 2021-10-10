import { Knex } from "knex";
import { Status } from "../../@types/cards";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cards", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description");
    table.enum("status", Object.keys(Status));
    table.timestamp("creationTime").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updateTime");
    table.timestamp("deletionTime");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("cards");
}
