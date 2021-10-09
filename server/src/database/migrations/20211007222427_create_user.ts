import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("email").notNullable();
    table.string("name").notNullable();
    table.string("password").notNullable();
    table.timestamp("creationTime").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updateTime");
    table.timestamp("deletionTime");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("users");
}
