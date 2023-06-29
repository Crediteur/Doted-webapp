/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return (
    knex.schema
      .createTable('User', (table) => {
        table.increments('userId');
        table.string('foreignUserId').notNullable();
        table.string('email').notNullable();
        table.string('displayName').notNullable();
        table.binary('icon');
        table.timestamp('lastLogin');

        table.primary('userId');
        table.unique('foreignUserId');
      })

      .createTable('Card', (table) => {
        table.increments('cardId');
        table.string('text').notNullable();
        table.string('imageType').notNullable();
        table.string('image').notNullable();

        table.primary('cardID');
      })

      .createTable('CardSet', (table) => {
        table.increments('cardSetId');

        table.string('title').notNullable();
        table.string('description').notNullable();

        table.string('imageType').notNullable();

        table.primary('cardSetId');
      })

      // card <==> cardset many to many
      .createTable('CardSetCards', (table) => {
        table.integer('cardSetId').unsigned();
        table.integer('cardId').unsigned();

        table.primary(['cardSetId', 'cardId']);

        table.foreign('cardSetId').references('CardSet.cardSetId').onDelete('CASCADE');
        table.foreign('cardId').references('Card.cardId').onDelete('CASCADE');
      })

      // progress of users by cardset and card
      .createTable('CardSetProgress', (table) => {
        table.integer('userId').unsigned();
        table.integer('cardSetId').unsigned();
        table.integer('cardId').unsigned();

        table.integer('displayCount').notNullable().defaultTo(0); // how many times user has seen the card
        table.integer('passCount').notNullable().defaultTo(0); // how many times user identified the card
        table.integer('failCount').notNullable().defaultTo(0); // how many times user failed to identify the card

        table.primary(['userId', 'cardSetId', 'cardId']);

        table.foreign('userId').references('User.userId').onDelete('CASCADE');
        table.foreign('cardSetId').references('CardSet.cardSetId').onDelete('CASCADE');
        table.foreign('cardId').references('Card.cardId').onDelete('CASCADE');
      })
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('user');
}
