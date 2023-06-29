import knex_fn from 'knex';
import { Model } from 'objection';

const knex = knex_fn({
  client: 'better-sqlite3',
  connection: {
    filename: './db/doted.sqlite'
  },
  useNullAsDefault: true
});

Model.knex(knex);

export { knex };
