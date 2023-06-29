/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * add cover image source to each card set
 */
export function up(knex) {
  return knex.schema.table('CardSet', (table) => {
    table.string('image');
    table.integer('cardCount').notNullable().defaultTo(0);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table('CardSet', (table) => {
    table.dropColumn('image');
    table.dropColumn('cardCount');
  });
}
