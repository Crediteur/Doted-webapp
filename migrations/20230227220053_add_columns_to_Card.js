/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * add description column source to each card
 */
export function up(knex) {
  return knex.schema.table('Card', (table) => {
    table.string('desc').defaultTo('');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table('Card', (table) => {
    table.dropColumn('desc');
  });
}
