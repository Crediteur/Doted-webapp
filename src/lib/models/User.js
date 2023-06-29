import { knex } from '../server/database.js';
import { Model } from 'objection';

class User extends Model {
  static get idColumn() {
    return 'userId';
  }
  static get tableName() {
    return 'User';
  }
}

export { User };
