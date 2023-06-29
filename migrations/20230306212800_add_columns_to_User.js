/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * add password to user table
 */
export function up(knex) {
  return knex.schema.table('User', (table) => {
    table.dropColumn('icon');
    table.string('avatar');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table('User', (table) => {
    table.dropColumn('avatar');
    table.binary('icon');
  });
}
