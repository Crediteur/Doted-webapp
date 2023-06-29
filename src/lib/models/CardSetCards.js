import { knex } from '../server/database.js';
import { Model } from 'objection';
import { Card } from './Card.js';
import { Set } from './Set.js';

class CardSetCards extends Model {
  static get idColumn() {
    return ['cardSetId', 'cardId'];
  }
  static get tableName() {
    return 'CardSetCards';
  }

  static get relationMappings() {
    return {
      //Model.BelongsToOneRelation with Card
      belongsToCard: {
        relation: Model.BelongsToOneRelation,
        modelClass: Card,
        join: {
          from: 'CardSetCards.cardId',
          to: 'Card.cardId'
        }
      },

      //Model.BelongsToOneRelation with Set
      belongsToSet: {
        relation: Model.BelongsToOneRelation,
        modelClass: Set,
        join: {
          from: 'CardSetCards.cardSetId',
          to: 'CardSet.cardSetId'
        }
      }
    };
  }
}

export { CardSetCards };
