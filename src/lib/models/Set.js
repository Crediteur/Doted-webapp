import { knex } from '../server/database.js';
import { Model } from 'objection';
import { Card } from './Card.js';
import { CardSetCards } from './CardSetCards.js';

class Set extends Model {
  static get idColumn() {
    return 'cardSetId';
  }
  static get tableName() {
    return 'CardSet';
  }

  static get relationMappings() {
    return {
      //Model.ManyToManyRelation with Card
      cards: {
        relation: Model.ManyToManyRelation,
        modelClass: Card,

        join: {
          from: 'CardSet.cardSetId',
          through: {
            from: 'CardSetCards.cardSetId',
            to: 'CardSetCards.cardId'
          },
          to: 'Card.cardId'
        }
      },

      //Model.HasManyRelation with CardSetCards
      cardsRelation: {
        relation: Model.HasManyRelation,
        modelClass: CardSetCards,
        join: {
          from: 'CardSet.cardSetId',
          to: 'CardSetCards.cardSetId'
        }
      }
    };
  }
}

export { Set };
