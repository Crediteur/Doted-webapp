// Knex config; see https://knexjs.org/guide/migrations.html#knexfile-js

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  directory: './migrations',
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './db/doted.sqlite'
    },
    useNullAsDefault: true
  }
};
